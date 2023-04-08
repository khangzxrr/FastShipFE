import React, { useEffect, useState } from 'react'
import {
    Descriptions, Radio
} from 'antd'

export default function OrderInfo(props) {

    const [currentStatus, setCurrentStatus] = useState(0)

    useEffect(() => {
        setCurrentStatus(props.order.progressStatus)
    }, [props.order])

    function onStatusChange(e) {
        
        setCurrentStatus(e.target.value)
        console.log(currentStatus)
    }

    return (
        <>
            <div style={{
                width: '100%', border: '1px solid grey',
                borderRadius: '20px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }}>
                <Descriptions title="Order Info">
                    <Descriptions.Item label="Status" span={3} >
                        <Radio.Group onChange={onStatusChange} value={currentStatus}>
                            <Radio value={0}> Chưa thanh toán </Radio>
                            <Radio value={1}> Đang đợi order hàng </Radio>
                            <Radio value={2}> Đang đợi hàng từ người bán </Radio>
                            <Radio value={3}> Đang giao từ US về VN </Radio>
                            <Radio value={4}> Đang ở kho VN </Radio>
                            <Radio value={5}> Đang giao đến khách hàng </Radio>
                            <Radio value={6}> Đã hoàn thành </Radio>
                        </Radio.Group></Descriptions.Item>

                </Descriptions>
            </div>
        </>

    )
}
