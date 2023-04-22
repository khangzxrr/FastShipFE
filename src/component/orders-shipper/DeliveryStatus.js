import React from 'react'
import { Radio, Button } from 'antd'
import { CiLocationOn } from 'react-icons/ci'
import { BsBarChartSteps } from 'react-icons/bs'
export default function DeliveryStatus() {
    return (
        <div style={{
            width: '100%', border: 'none', marginBottom: '10px',
            padding: '5px 20px', lineHeight: '5px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}><BsBarChartSteps />Tình trạng đơn hàng</p>
            <Radio.Group>
                <Radio value={"deliverToCustomer"}> Đang giao đến khách hàng </Radio>
                <Radio value={"finished"}> Đã hoàn thành </Radio>
            </Radio.Group>
            <Button style={{marginTop:'10px'}} type='primary'>Lưu</Button>
        </div>
    )
}
