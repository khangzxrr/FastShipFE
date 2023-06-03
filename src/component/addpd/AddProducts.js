import React from 'react'
import "../addpd/addpd.css"
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md'
import AddProducts1 from './AddProducts1'
import { Space, Dropdown, Button } from 'antd'
import { Link } from 'react-router-dom'

const handleMenuClick = (e) => {

};
const items = [
  {
    label: (
      <Link to='/home'>Trang chủ</Link>
    ),
    key: '1',
  },
  {
    label:  (
      <Link to='/order'>Đơn hàng của tôi</Link>
    ),
    key: '2',

  },
  {
    label:  (
      <Link to='/add'>Tạo đơn hàng</Link>
    ),
    key: '3',
  },

];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
export default function AddProducts() {
  return (
      <div  style={{display:'flex',width: '100%', marginBottom: '10px', marginTop:'10px' }}>
        <AddProducts1 />
      </div>
  )
}