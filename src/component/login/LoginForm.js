import React from 'react'
import { Input, Checkbox, Button } from "antd";
import "../login/login.css"
import { Link } from 'react-router-dom';
export default function LoginForm() {
    return (
        <div className='loginform' style={{textAlign:"center", width:"100%", marginTop:"110px"}}>
            <h2 style={{fontWeight:900}}>Chào Mừng</h2>
            <p style={{color:'grey'}}>XaBa.vn được điều hành bởi Xanh Logistics</p>
            <div className='loginform1' style={{display:'flex', backgroundColor:"grey"}}>
            </div>
            <Input placeholder='EMAIL' />
            <br/>
            <Input placeholder='NHẬP MẬT KHẨU' />
            <br/>
            <Link><p style={{textAlign:"right", marginRight:'160px', color:'grey'}}>Quên mật khẩu ?</p></Link>
            <Link to='/order'><Button type='primary'>Đăng nhập</Button></Link>
        </div>
    )
}
