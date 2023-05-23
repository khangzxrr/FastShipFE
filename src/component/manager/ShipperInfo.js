import React from 'react'

export default function ShipperInfo(props) {
    return (
        <>
            <img
                src="/avatar.jpeg"
                style={{ width: '80%', height: '220px',marginLeft:'10%', borderRadius:'100%'}}
            />
            <p>Name: {props.shipper.name}</p>
            <p>Shipping address: {props.shipper.shippingAddress} </p>
            <p>status: {props.shipper.status}</p>
            <p>Role:Shipper</p>
        </>
    )
}
