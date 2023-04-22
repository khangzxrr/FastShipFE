import React from 'react'
import { Radio } from 'antd'
import { CiLocationOn } from 'react-icons/ci'
import { BsBarChartSteps, BsInfo, BiInfoCircle, BsInfoCircle } from 'react-icons/bs'
export default function Bill() {
    return (
        <div style={{
            width: '100%', border: 'none', marginBottom: '10px',
            padding: '5px 20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}><BsInfoCircle />Thành tiền</p>
            <p>Số tiền cần thu : </p>
        </div>
    )
}
