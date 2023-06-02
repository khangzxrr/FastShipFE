import React from 'react'
import { Descriptions } from 'antd'
export default function UserInfo(props) {

  console.log(props)
  return (
    <Descriptions>
      <Descriptions.Item label="Tên" span={3}>{props.order.customerName}</Descriptions.Item>
      <Descriptions.Item label="SĐT" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>

      {
        props.order.customerDescription !== '' &&
          (<Descriptions.Item label="Mô tả" span={3}>{props.order.customerDescription}</Descriptions.Item>)
      }
      
      <Descriptions.Item label="Địa chỉ">
        {props.order.deliveryAddress}
      </Descriptions.Item>
    </Descriptions>
  )
}
