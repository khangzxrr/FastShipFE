import React from 'react'
import { Descriptions, Radio } from 'antd'
export default function Payment() {
  return (
    <div style={{
        width: '100%', border: '1px solid grey',
        borderRadius: '20px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
    }}>
        <Descriptions title="Order Info">
            <Descriptions.Item label="Payment">VISA</Descriptions.Item>
            <Descriptions.Item label="ID Order">123</Descriptions.Item>
            <Descriptions.Item label="Total">5000</Descriptions.Item>

            <Descriptions.Item label="Status" span={3} >
                <Radio.Group>
                    <Radio value="case1"> Cash</Radio>
                    <Radio value="case2"> VISA Card </Radio>
                    <Radio value="case3"> QR Pay </Radio>
                </Radio.Group></Descriptions.Item>

        </Descriptions>
    </div>
  )
}
