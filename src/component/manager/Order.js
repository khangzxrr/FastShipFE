import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function Order() {
    return (
        <>
            <div className='revenue'>
                <img
                    src="/product.png"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Đơn đã tạo</p>
                <h2>+100</h2>
                <Link to="/manager-order"><Button type='primary'>CHI TIẾT</Button></Link>
            </div>
        </>
    )
}
