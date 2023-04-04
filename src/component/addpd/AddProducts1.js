import React from 'react'
import AddDeleteTableRows from './AddDeleteTableRows';
import { Input,Button } from 'antd';
import {AiOutlineGift} from 'react-icons/ai'
import "../addpd/addpd.css"
export default function AddProducts1() {
  return (
    <div style={{width:'65%', margin:'10px 20px 10px 5%', border:'1px solid grey',
    borderRadius:'20px', padding:'10px 20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border:'none'}}>
        <h2>TẠO ĐƠN HÀNG</h2>
        <p>Điền đầy đủ thông tin bên dưới</p>
        <AddDeleteTableRows/>
    </div>
  )
}
