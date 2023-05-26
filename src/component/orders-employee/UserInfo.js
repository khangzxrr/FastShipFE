import React from 'react'
import { Descriptions } from 'antd'
export default function UserInfo(props) {

  console.log(props)
  return (
    <Descriptions>
      <Descriptions.Item label="UserName" span={3}>{props.order.customerName}</Descriptions.Item>
      <Descriptions.Item label="Telephone" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>
      <Descriptions.Item label="Description" span={3}>{props.order.customerDescription}</Descriptions.Item>
      <Descriptions.Item label="Address">
        {props.order.deliveryAddress}
      </Descriptions.Item>
    </Descriptions>
  )
}
