import React from 'react'
import { Button,Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect } from 'antd'
    import "../home/home.css"
export default function InputForm() {
  return (
    <>
    <Form className='inputform'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="EMAIL">
        <Input />
      </Form.Item>
      <Form.Item label="NAME">
        <Input />
      </Form.Item>
      <Form.Item label="PHONE">
        <Input />
      </Form.Item>
      <Form.Item label="ADDRESS">
        <Input />
      </Form.Item>
      <Form.Item label="CITY">
        <Input />
      </Form.Item>
    </Form>
    </>
  )
}
