import React from 'react'

export default function CustomerInfo() {
  return (
    <>
            <img
                src="/avatar.jpeg"
                style={{ width: '80%', height: '220px',marginLeft:'10%', borderRadius:'100%'}}
            />
            <p>Name:</p>
            <p>Age:</p>
            <p>Phone:</p>
            <p>Address:</p>
            <p>Role:Customer</p>
        </>
  )
}
