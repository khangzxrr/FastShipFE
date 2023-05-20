import React from 'react'
import { Descriptions } from 'antd'
export default function RequestInfo(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Employee Name" span={3}>{props.employeeName}</Descriptions.Item>
    <Descriptions.Item label="DateTime Request" span={3}>{props.orderDate}</Descriptions.Item>
  </Descriptions>
  )
}
