import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
export default function DeliveryAddress() {
    return (
        <div style={{
            width: '100%', border: 'none',marginBottom:'10px',
             padding: '5px 20px',lineHeight:'5px', boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
            <p style={{fontSize:15, fontWeight:600}}><CiLocationOn/>Địa chỉ nhận hàng</p>
            <p>Khánh Duy</p>
            <p>0906449688</p>
            <p>Bình Thạnh</p>
        </div>
    )
}
