import React from 'react'
import { Descriptions } from 'antd'
export default function RequestInfo(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Tên nhân viên" span={3}>{props.employeeName}</Descriptions.Item>
    <Descriptions.Item label="Ngày tạo đơn" span={3}>{props.orderDate}</Descriptions.Item>
  </Descriptions>
  )
}
