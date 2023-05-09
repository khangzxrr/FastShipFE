import React, { useEffect } from 'react'
import "../home/home.css"
import { Button, Space, Spin} from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductAction } from '../../features/requestProduct/requestProductAction';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { logout } from '../../features/login/loginSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { HttpTransportType } from '@microsoft/signalr';
import { Link } from 'react-router-dom';



export default function () {
    const [productUrl, setProductUrl] = useState('')
    const [waitingFetching, setWaitingFetching] = useState(false)
    const [connection, setConnection] = useState(null)

    const loginInfo = useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleProductUrlOnChange(event) {
        setProductUrl(event.target.value)
    }

    function handleRequestProductOnClick() {
        setWaitingFetching(true)
        dispatch(requestProductAction(productUrl, loginInfo.token))
            .catch((err) => {
                console.log(err.response.status)
                if (err.response.status === 401) {
                    //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
                    dispatch(logout())
                    navigate("/login")
                }

                setWaitingFetching(false)
            })


    }

    useEffect(() => {

        const connection = new HubConnectionBuilder()
            .withUrl(API_BASE_URL + "/hub", {
                skipNegotiation: false,
                transport: HttpTransportType.WebSockets,
                accessTokenFactory: () => loginInfo.token })
            .withAutomaticReconnect()
            .build()

        setConnection(connection)

        connection
            .start()
            .then(() => {
                console.log("connected")
                connection.on("boardcast", (message) => {

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
                if (err.errorType === "FailedToNegotiateWithServerError") {
                    //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
                    dispatch(logout())
                    navigate("/login")
                }
            })
    }, [])

    return (
        <>
            <div className='opa'>

            </div>
            <div className='baogia-form' hidden={!waitingFetching}>
                <Space >
                    <Spin style={{ width: '1200px', marginTop: '20px' }} tip="Đợi xí...">
                    </Spin>
                </Space>
            </div>
            <div style={{ width: '98vw', height: '100vw' }} hidden={waitingFetching}>
                <div className='baogia-form'>
                    <input className='btnlink' onChange={handleProductUrlOnChange} type='text' placeholder='Nhập link sản phẩm cần mua'></input>
                    <input className='btnquantity' min={1} type='number' placeholder='Nhập số lượng'></input>
                    <Button type='primary' onClick={handleRequestProductOnClick}>TÌM KIẾM</Button>
                    <Button type='primary'>BÁO GIÁ NHANH</Button>
                </div>
            </div>
        </>

    )
}
