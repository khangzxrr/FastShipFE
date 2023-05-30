import React from 'react'
import { Button } from 'antd'
export default function DeliveryWarranty() {
    return (
        <>
            <h2>PHƯƠNG THỨC VẬN CHUYỂN</h2>
            <Button style={{ color: 'black', width: '100%', marginBottom: '10px' }} type="primary">
                Giao hàng bằng nhân viên
            </Button>
            <Button style={{ color: 'black', width: '100%', marginBottom: '10px' }} type="primary">
                Giao hàng bằng bên thứ 3
            </Button>
            <Button style={{ color: 'black', width: '100%' }} type="primary">
                Người dùng đến kho nhận
            </Button></>
    )
}
