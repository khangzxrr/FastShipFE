import React from 'react'
import { Descriptions } from 'antd'
export default function InforReturnDetail(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Tên khách hàng" span={3}>{props.productIssue.customerFullname}</Descriptions.Item>
    <Descriptions.Item label="SĐT" span={3}>{props.productIssue.customerPhonenumber}</Descriptions.Item>
    <Descriptions.Item label="Email" span={3}>{props.productIssue.customerEmail}</Descriptions.Item>
    <Descriptions.Item label="Lí do đổi trả" span={3}>{props.productIssue.returnReason}</Descriptions.Item>
    <Descriptions.Item label="Series" span={3}>{props.productIssue.series}</Descriptions.Item>
  </Descriptions>
  )
}
