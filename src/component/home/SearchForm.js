import React, { useEffect } from 'react'
import "../home/home.css"
import { Button, Space, Spin} from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch} from 'react-redux';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { HttpTransportType } from '@microsoft/signalr';



export default function () {
    const [productUrl, setProductUrl] = useState('')
    const [waitingFetching, setWaitingFetching] = useState(false)
    const [connection, setConnection] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleCartOnClick() {
        navigate('/add')
    }

    function handleProductUrlOnChange(event) {
        setProductUrl(event.target.value)
    }

    function handleRequestProductOnClick() {
        setWaitingFetching(true)

        try{
            connection.invoke('AddProductUrlToFetchData', { productUrl })
        }catch(err) {
            alert('Có lỗi xảy ra, vui lòng tải lại trang và thử lại');
        }
        
    }

    useEffect(() => {

        const connection = new HubConnectionBuilder()
            .withUrl(API_BASE_URL + "/hub", {
                skipNegotiation: false,
                transport: HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build()

        setConnection(connection)

        connection
            .start()
            .then(() => {
                console.log("connected")
                connection.on("fetched_new_product", (message) => {

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
            })
            .catch((err) => {
                alert(err.response.data);
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
                    <input className='btnquantity' min={1} type='number' placeholder='Nhập số lượng'></input>
                    <Button type='primary' onClick={handleRequestProductOnClick}>TÌM KIẾM</Button>
                    <Button type='primary' onClick={handleCartOnClick}>GIỎ HÀNG</Button>
                    
                </div>
            </div>
        </>

    )
}
