import React from 'react'
import { Descriptions } from 'antd'
export default function UserInfo(props) {

  console.log(props)
  return (
    <Descriptions title="User Info">
    <Descriptions.Item label="UserName">{props.order.customerName}</Descriptions.Item>
    <Descriptions.Item label="Description">{props.order.customerDescription}</Descriptions.Item>
    <Descriptions.Item label="Telephone">{props.order.contactPhoneNumber}</Descriptions.Item>
    <Descriptions.Item label="Address">
      {props.order.deliveryAddress}
    </Descriptions.Item>
  </Descriptions>
  )
}
