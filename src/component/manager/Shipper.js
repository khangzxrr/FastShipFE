import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function Shipper() {
    return (
        <>
            <div className='revenue'>
                <img
                    src="/shipping.png"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Đơn đã giao</p>
                <h2>+10</h2>
                <Link to="/manager-shipper"><Button type='primary'>CHI TIẾT</Button></Link>
            </div>
        </>
    )
}
