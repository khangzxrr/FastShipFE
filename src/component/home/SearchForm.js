import React, { useEffect } from 'react'
import "../home/home.css"
import { Button, Space, Spin , Modal} from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductAction } from '../../features/requestProduct/requestProductAction';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { logout } from '../../features/login/loginSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { HttpTransportType } from '@microsoft/signalr';
import InputForm from './InputForm';





export default function () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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

        try{
            connection.invoke('AddProductUrlToFetchData', { productUrl })
            alert('find product!');
        }catch(err) {
            alert('Có lỗi xảy ra, vui lòng tải lại trang và thử lại');
        }
        
        // dispatch(requestProductAction(productUrl, loginInfo.token))
        //     .catch((err) => {
        //         console.log(err.response.status)
        //         if (err.response.status === 401) {
        //             //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
        //             dispatch(logout())
        //             navigate("/login")
        //         }

        //         setWaitingFetching(false)
        //     })



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
                    <Button type='primary' style={{marginRight:''}} onClick={showModal}>BÁO GIÁ NHANH</Button>
                    <Modal title="ĐẶT HÀNG NHANH" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <InputForm/>
                    </Modal>
                </div>
            </div>
        </>

    )
}
