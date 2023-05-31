import React from 'react'
import { Descriptions } from 'antd'
export default function InforReturnDetail() {
  return (
    <Descriptions>
    <Descriptions.Item label="Tên khách hàng" span={3}></Descriptions.Item>
    <Descriptions.Item label="SĐT" span={3}></Descriptions.Item>
    <Descriptions.Item label="Dịch vụ" span={3}></Descriptions.Item>
  </Descriptions>
  )
}
