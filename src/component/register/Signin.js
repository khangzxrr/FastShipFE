import React from 'react'
import { Input, Button } from "antd";
import "../login/login.css"
import { Link } from 'react-router-dom';
export default function SignIn() {
    return (
        <div className='loginform' style={{textAlign:"center", width:"100%", marginTop:"150px"}}>
            <h2 style={{fontWeight:900}}>Chào Mừng</h2>
            <p style={{color:'grey'}}>XaBa.vn được điều hành bởi Xanh Logistics</p>
            <div className='loginform1' style={{display:'flex', backgroundColor:"grey"}}>
            </div>
            <Input placeholder='EMAIL' />
            <br/>
            <Link to={'/register'}> <Button type='primary'>Xác nhận Email</Button></Link>
        </div>
    )
}
