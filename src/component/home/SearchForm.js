import React, { useEffect } from 'react'
import "../home/home.css"
import { Input, Checkbox, Button, Form, message, Space , Spin} from "antd";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductAction } from '../../features/requestProduct/requestProductAction';
import { addProduct } from '../../features/requestProduct/requestProductSlice';
import { logout } from '../../features/login/loginSlice';
import { API_BASE_URL } from '../../features/axiosProfile';
import { BsSearch } from 'react-icons/bs'

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const { TextArea } = Input;
export default function () {
    const [productUrl, setProductUrl] = useState('')
    const [waitingFetching, setwaitingFetching] = useState(false)
    const [connection, setConnection] = useState(null)

    const loginInfo = useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleProductUrlOnChange(event) {
        setProductUrl(event.target.value)
    }

    function handleRequestProductOnClick() {
        setwaitingFetching(true)
        dispatch(requestProductAction(productUrl, loginInfo.token))
            .catch((err) => {
                console.log(err.response.status)
                if (err.response.status === 401){
                    //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
                    dispatch(logout())    
                    navigate("/login")
                }

                setwaitingFetching(false)
            })

        
    }

    useEffect(() => {

        const connection = new HubConnectionBuilder()
            .withUrl(API_BASE_URL + "/hub", { accessTokenFactory: () => loginInfo.token })
            .withAutomaticReconnect()
            .build()

        setConnection(connection)
    }, [])

    useEffect(() => {

        if (connection != null && loginInfo != null) {
            connection
                .start()
                .then(() => {
                    console.log("connected")
                    connection.on("boardcast", (message) => {
                        
                        const jsonObj = JSON.parse(message)

                        if (jsonObj.message) {
                            alert("Có lỗi xảy ra, vui lòng thử lại")
                            setwaitingFetching(false)
                            return
                        } 

                        //success
                        dispatch(addProduct(jsonObj))
                        navigate("/add")
                    });
                })
                .catch((err) => {
                    if (err.errorType === "FailedToNegotiateWithServerError"){
                        //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
                        dispatch(logout())    
                        navigate("/login")
                    }
                })
        }
    }, [connection, loginInfo])

    return (
        <>
            <div>
                <div className='form-home'>
                    <div className='baogia-form' hidden={!waitingFetching}>
                        <Space >
                            <Spin style={{width:'800px', marginTop:'20px'}} tip="Đợi xí...">
                            </Spin>
                        </Space>
                    </div>
                    <div style={{ width: '98vw', height: '100vw' }} hidden={waitingFetching}>
                        <div className='baogia-form'>
                            <input className='btn' onChange={handleProductUrlOnChange} type='text' placeholder='Nhập link sản phẩm cần mua'></input>
                            <button onClick={handleRequestProductOnClick}><BsSearch style={{ fontSize: 25, marginLeft: '50px', color: 'rgba(3, 102, 214, 0.3)' }} /></button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
