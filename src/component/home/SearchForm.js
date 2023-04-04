import React, { useEffect } from 'react'
import "../home/home.css"
import { Input, Checkbox, Button, Form, message, Space } from "antd";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductAction } from '../../features/requestProduct/requestProductAction';
import { addProduct } from '../../features/requestProduct/requestProductSlice';


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
        dispatch(requestProductAction(productUrl, loginInfo.token))
        setwaitingFetching(true)
    }

    useEffect(() => {

        const connection = new HubConnectionBuilder()
            .withUrl('https://fastship.sontran.us/hub', { accessTokenFactory: () => loginInfo.token })
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
                        console.log(JSON.parse(message))
                        const jsonProduct = JSON.parse(message)
                        dispatch(addProduct(jsonProduct))
                        navigate("/add")
                    });
                })
                .catch((err) => console.log(err))
        }
    }, [connection, loginInfo])

    return (
        <>
            <div style={{ marginLeft: "50%", position: "absolute", zIndex: "1", paddingTop: '20px' }}>
                <p style={{ fontSize: 30, fontWeight: 700, margin: "10px 0px" }}>TÌM GÌ CŨNG CÓ</p>
                <p style={{ fontSize: 16, fontWeight: 700, margin: "10px 0px" }}>XaBa.vn được điều hành bởi Xanh Logistics</p>
                <div className='button-home' style={{ display: 'flex' }}>
                    <div className='baogia'>
                        <p>Nhận Báo Giá</p>
                    </div>
                    <div className='timkiem'>
                        <p>Tìm Kiếm</p>
                    </div>
                </div>
                <div className='form-home'>
                    <div className='baogia-form' hidden={!waitingFetching}>
                        Xin vui lòng chờ giây lát....
                    </div>
                    <div className='baogia-form' hidden={waitingFetching}>
                        <Input className='baogiaip' placeholder='LINK HOẶC TÊN SẢN PHẨM' onChange={handleProductUrlOnChange}/>
                        <Input className='baogiaip' placeholder='SỐ LƯỢNG' />
                        <br />
                        <button onClick={handleRequestProductOnClick}>Báo giá nhanh</button>
                    </div>
                    <div className='timkiem-form' style={{ height: "200px" }}>
                        <Link><Input style={{ width: "70%" }} placeholder='LINK HOẶC TÊN SẢN PHẨM' /></Link>
                        <button>Tìm kiếm</button>
                        <br />
                        <br />
                        <span>Laptop</span><span>Đồng hồ</span>
                    </div>

                </div>
            </div>
        </>

    )
}
