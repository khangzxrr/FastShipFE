import React from 'react'

export default function CustomerInfo(props) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <img
          src="/avatar.jpeg"
          style={{ width: '200px', height: '200px', marginLeft: '10px',marginRight:'80px', borderRadius: '100%', boxShadow:'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' }}
        />
        <div>
          <p>Tên: {props.customer.fullname}</p>
          <p>SĐT: {props.customer.phoneNumber}</p>
          <p>Địa chỉ: {props.customer.address}</p>
          <p>Email: {props.customer.email}</p>
          <p>Vai trò: Khách hàng</p>
        </div>
      </div>
    </>
  )
}
