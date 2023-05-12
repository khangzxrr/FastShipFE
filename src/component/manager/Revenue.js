import React from 'react'
import { Button } from 'antd'
export default function Revenue() {
    return (
        <>
            <div className='revenue'>
                <img
                    src="/wallet.jpeg"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Doanh thu</p>
                <h2>$1000000</h2>
                <Button type='primary'>CHI TIẾT</Button>
            </div>
        </>
    )
}
