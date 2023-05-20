import React, { useEffect } from 'react'
import "../home/home.css"
import { Button, InputNumber, Space, Spin} from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch} from 'react-redux';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { HttpTransportType } from '@microsoft/signalr';



export default function () {
    const [productUrl, setProductUrl] = useState('')
    const [productQuantity, setProductQuantity] = useState(1)
    const [waitingFetching, setWaitingFetching] = useState(false)
    const [connection, setConnection] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleCartOnClick() {
        navigate('/add')
    }

    function handleProductQuantityChange(value) {
        console.log(value)
        setProductQuantity(value)
    }

    function handleProductUrlOnChange(event) {
        setProductUrl(event.target.value)
    }


    function handleRequestProductOnClick() {

        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');  
        if (!regex.test(productUrl)){
            alert('Đây không phải là một đường dẫn, vui lòng thử lại')
            return
        }

        if (productUrl.indexOf('www.ebay.com') === -1){
            alert('Đây không phải là link ebay, vui lòng thử lại')
            return
        }

        try{
            setWaitingFetching(true)
            connection.invoke('AddProductUrlToFetchData', { productUrl })
        }catch(err) {
            console.log(err)
            setWaitingFetching(false)
            alert('Có lỗi xảy ra, vui lòng tải lại trang và thử lại');
        }
        
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

                    const jsonObj = JSON.parse(message)

                    if (jsonObj.message) {
                        alert("Có lỗi xảy ra, vui lòng thử lại")
                        setWaitingFetching(false)
                        return
                    }

                    //success
                    dispatch(addProduct(jsonObj))
                    navigate("/add")
                });


                setConnection(connectionBuilder)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='opa'>
                
            </div>
            {waitingFetching && (
            <div className='baogia-form'>
                <Space >
                    <Spin style={{ width: '1200px', marginTop: '20px' }} tip="Đợi xí...">
                    </Spin>
                </Space>
            </div>)}
            <div style={{ width: '98vw', height: '100vw' }} hidden={waitingFetching}>
                <div className='baogia-form'>
                    <input className='btnlink' onChange={handleProductUrlOnChange} type='text' placeholder='Nhập link sản phẩm cần mua'></input>
                    <InputNumber className='btnquantity' min={1} max={10} value={productQuantity} placeholder='Nhập số lượng' onChange={handleProductQuantityChange}></InputNumber>
                    <Button type='primary' onClick={handleRequestProductOnClick}>TÌM KIẾM</Button>
                    <Button type='primary' onClick={handleCartOnClick}>GIỎ HÀNG</Button>
                    
                </div>
            </div>
        </>

    )
}
