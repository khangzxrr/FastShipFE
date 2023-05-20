import React from 'react'
import { Descriptions } from 'antd'
export default function RequestInfo() {
  return (
    <Descriptions>
    <Descriptions.Item label="Employee Name" span={3}>Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="DateTime Request" span={3}>14/12</Descriptions.Item>
  </Descriptions>
  )
}
