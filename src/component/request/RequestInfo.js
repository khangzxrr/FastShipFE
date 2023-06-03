import React from 'react'
import { Descriptions } from 'antd'
import Moment from 'react-moment'
export default function RequestInfo(props) {
  return (
    <Descriptions>
    <Descriptions.Item label="Tên nhân viên" span={3}>{props.employeeName}</Descriptions.Item>
    <Descriptions.Item label="Ngày tạo đơn" span={3}><Moment date={props.orderDate} format='DD/MM/YYYY HH:mm' /></Descriptions.Item>
  </Descriptions>
  )
}
