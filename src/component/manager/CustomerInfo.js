import React from 'react'

export default function CustomerInfo(props) {
  return (
    <>
            <img
                src="/avatar.jpeg"
                style={{ width: '80%', height: '220px',marginLeft:'10%', borderRadius:'100%'}}
            />
            <p>Name: {props.customer.fullname}</p>
            <p>Phone: {props.customer.phoneNumber}</p>
            <p>Address: {props.customer.address}</p>
            <p>Email: {props.customer.email}</p>
            <p>Role:Customer</p>
        </>
  )
}
