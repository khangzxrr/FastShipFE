import React, { useEffect, useState } from 'react'
import { Input, Checkbox, Button, Spin } from "antd";
import "../login/login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../features/login/loginAction';



export default function LoginForm() {

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginInfo = useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (loginInfo.isLogin) {
            navigate("/home")
        }
    }, [loginInfo])

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function loginButtonOnClick(e) {

        setLoading(true)

        dispatch(loginAction(email, password))
            .then((response) => {
                console.log(response)
            })
            .catch((ex) => {
                if (ex.response && ex.response.status == 400) {
                    alert('sai tài khoản hoặc mật khẩu')
                }else{
                    alert('có lỗi xảy ra, vui lòng thử lại')
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <div className='loginform' style={{ textAlign: "center", width: "100%", marginTop: "110px" }}>
                <h2 style={{ fontWeight: 900 }}>Đăng Nhập</h2>
                <div className='loginform1' style={{ display: 'flex', backgroundColor: "grey" }}>
                </div>
                <Input placeholder='EMAIL' onChange={handleEmailChange} />
                <br />
                <Input type='password' placeholder='NHẬP MẬT KHẨU' onChange={handlePasswordChange} />
                <br />
                
                {!loading && (<Button type='primary' onClick={(e) => loginButtonOnClick(e)}>Đăng nhập</Button>)}
                {loading && (<Spin />)}
                
                
            </div>

        </>

    )
}
