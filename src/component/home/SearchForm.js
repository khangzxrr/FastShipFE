import React, { useEffect } from 'react'
import "../home/home.css"
import { Button, InputNumber, Space, Spin, message } from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { HttpTransportType } from '@microsoft/signalr';
import { Utils } from '../../features/utils/Utils';
import { Input } from 'antd/es';



export default function () {
    const [productUrl, setProductUrl] = useState('')
    const [productQuantity, setProductQuantity] = useState(1)
    const [waitingFetching, setWaitingFetching] = useState(false)
    const [connection, setConnection] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [messageApi, messageContextHolder] = message.useMessage()

    function handleCartOnClick() {
        navigate('/add')
    }

    function handleProductQuantityChange(value) {
        setProductQuantity(value)

        console.log(productQuantity)
    }

    function handleProductUrlOnChange(event) {
        setProductUrl(event.target.value)
    }


    function handleRequestProductOnClick() {

        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        if (!regex.test(productUrl)) {
            Utils.showErrorNoti(messageApi, 'Đây không phải là một đường dẫn, vui lòng thử lại')
            return
        }

        if (productUrl.indexOf('www.ebay.com') === -1) {
            Utils.showErrorNoti(messageApi, 'Đây không phải là link ebay, vui lòng thử lại')
            return
        }

        try {
            setWaitingFetching(true)
            connection.invoke('AddProductUrlToFetchData', {
                productUrl
            })
        } catch (err) {
            console.log(err)
            setWaitingFetching(false)
            Utils.showErrorNoti(messageApi, 'Có lỗi xảy ra, vui lòng tải lại trang và thử lại')
        }

    }

    function parseProductAndNavigate(message) {
        const jsonObj = JSON.parse(message)

        if (jsonObj.message) {
            Utils.showErrorNoti(messageApi, 'Có lỗi xảy ra, vui lòng tải lại trang và thử lại')

            setWaitingFetching(false)
            return
        }

        console.log(productQuantity)

        jsonObj.quantity = productQuantity
        //success
        dispatch(addProduct(jsonObj))
        navigate("/add")
    }

    useEffect(() => {

        const connectionBuilder = new HubConnectionBuilder()
            .withUrl(API_BASE_URL + "/hub", {
                skipNegotiation: false,
                transport: HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build()

        connectionBuilder.start()
            .then(() => {

                console.log("connected")

                connectionBuilder.on("fetched_new_product", (message) => {
                    parseProductAndNavigate(message)
                });


                setConnection(connectionBuilder)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [productQuantity])

    return (
        <>
            <h2 style={{margin:'14% 0% 0% 8%', position:'absolute', color:'white', fontSize:70, zIndex:9}}>TÌM GÌ CŨNG CÓ TẠI FASTSHIP</h2>
            {messageContextHolder}
            <div className='opa'>

            </div>
            {waitingFetching && (
                <div className='baogia-form'>
                    <Space >
                        <Spin style={{ width: '1200px', marginTop: '20px', marginLeft:'11%' }} tip="Vui lòng chờ giây lát...">
                        </Spin>
                    </Space>
                </div>)}
            <div style={{ width: '98vw', height: '100vw' }} hidden={waitingFetching}>
                <div className='baogia-form'>
                    <input className='btnlink' onChange={handleProductUrlOnChange} type='text' placeholder='Nhập link sản phẩm cần mua'></input>
                    <Input className='btnquantity' value={productQuantity} placeholder='Nhập số lượng' onInput={(event) => handleProductQuantityChange(event.target.value)} onStep={(val) => handleProductQuantityChange(val)}></Input>
                    <Button type='primary' onClick={handleRequestProductOnClick}>TÌM KIẾM</Button>
                    <Button type='primary' onClick={handleCartOnClick}>GIỎ HÀNG</Button>

                </div>
            </div>
        </>

    )
}
