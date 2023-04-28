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
    <div>
      <div className='addpd' style={{ padding: "10px 20px", display: 'flex', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none' }}>
        <MdArrowBackIosNew style={{ fontSize: 20, marginTop: '6px', color: '#023E73' }} />
        <Space wrap>
          <Dropdown menu={menuProps}>
            <Button style={{width:'100px', backgroundColor:'#D8DEFF', color:'#2447FF',fontWeight:600, borderRadius:'20px', border:'none',marginLeft:'20px'}} >
              <Space>
                Menu<MdArrowDropDown />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <div  style={{display:'flex',width: '100%', marginBottom: '50px' }}>
        <AddProducts1 />
      </div>
    </div>
  )
}
