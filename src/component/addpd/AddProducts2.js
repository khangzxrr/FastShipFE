import React from 'react'
import { Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import {AiOutlineGift} from 'react-icons/ai'
export default function AddProducts2() {
  return (
    <div style={{
      width: '30%', margin: '10px 5% 10px 0px', border: '1px solid grey',height:'400px',
      borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
    }}>
      <h2>XEM TRƯỚC</h2>
      <p>Kiểm tra lại các thông tin bên dưới</p>
      <div style={{ display: 'flex', padding: '10px 20px', lineHeight: "2px", backgroundColor: '#C3F10E', borderRadius: '20px', fontWeight: 600, marginBottom: '10px' }}>
        <div style={{ width: '90%' }}>
          <p>iPhone 14</p>
          <p>đen</p>
        </div>
        <p >1200</p>
      </div>
      <div style={{ display: 'flex', padding: '10px 20px', lineHeight: "2px", backgroundColor: '#C3F10E', borderRadius: '20px', fontWeight: 600 }}>
        <div style={{ width: '90%' }}>
          <p>iPad Pro 2020</p>
          <p>đen</p>
        </div>
        <p >1200</p>
      </div>
      <div style={{margin:'40px 0px 10px 0px'}}>
      <Button style={{backgroundColor:'black', color:'yellow', margin:'0px 5px'}}><AiOutlineGift style={{fontSize:"15px", marginRight:"5px"}}/> FREESHIP</Button>
        <Button style={{backgroundColor:'black', color:'yellow', margin:'0px 5px'}}><AiOutlineGift style={{fontSize:"15px", marginRight:"5px"}}/> GIAM10K</Button>
      </div>
      <Checkbox><span style={{ color: "black" }}>Khách hàng doanh nghiệp cần xuất VAT</span></Checkbox>
      <Link to='/detailod'><Button type="primary" style={{width:'100%', color: 'black',fontWeight:600}} >YÊU CẦU BÁO GIÁ</Button></Link>
      
    </div>
  )
}
