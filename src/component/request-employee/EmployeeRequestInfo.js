import React from 'react'
import { Descriptions } from 'antd'
export default function EmployeeRequestInfo() {
  return (
    <Descriptions>
    <Descriptions.Item label="Customer Name" span={3}>Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="DateTime Request" span={3}>14/12</Descriptions.Item>
    <Descriptions.Item label="Phone Number" span={3}>0123</Descriptions.Item>
  </Descriptions>
  )
}
