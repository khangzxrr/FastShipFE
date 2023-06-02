import React from 'react'

export default function ShipperInfo(props) {
    return (
            <div style={{ display: 'flex' }}>
                <img
                    src="/avatar.jpeg"
                    style={{ width: '200px', height: '200px', marginLeft: '10px', marginRight: '80px', borderRadius: '100%', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' }}
                />
                <div>
                    <p>TÊN: {props.shipper.name}</p>
                    <p>Địa chỉ: {props.shipper.shippingAddress} </p>
                    <p>Trạng thái: {props.shipper.status}</p>
                    <p>Vai trò : Shipper</p>
                </div>
            </div>
    )
}
