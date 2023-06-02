import React from 'react'
import { Descriptions } from 'antd'
export default function EmployeeRequestInfo(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Tên khách hàng" span={3}>{props.order.customerName}</Descriptions.Item>
    <Descriptions.Item label="Ngày yêu cầu" span={3}>{props.order.orderDate}</Descriptions.Item>
    <Descriptions.Item label="SĐT" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>
    <Descriptions.Item label="Địa chỉ" span={3}>{props.order.deliveryAddress}</Descriptions.Item>
  </Descriptions>
  )
}
