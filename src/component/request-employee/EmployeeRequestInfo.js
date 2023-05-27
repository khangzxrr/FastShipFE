import React from 'react'
import { Descriptions } from 'antd'
export default function EmployeeRequestInfo(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Customer Name" span={3}>{props.order.customerName}</Descriptions.Item>
    <Descriptions.Item label="DateTime Request" span={3}>{props.order.orderDate}</Descriptions.Item>
    <Descriptions.Item label="Phone Number" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>
    <Descriptions.Item label="customerDescription" span={3}>{props.order.customerDescription}</Descriptions.Item>
  </Descriptions>
  )
}
