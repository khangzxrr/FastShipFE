import React from 'react'
import {
  Form,
  Input,
  Button
} from 'antd'
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
        <Form.Item label="HỌ VÀ TÊN">
          <Input />
        </Form.Item>
        <Form.Item label="SĐT">
          <Input />
        </Form.Item>
        <Form.Item label="ĐỊA CHỈ">
          <Input />
        </Form.Item>
        <Form.Item label="THÀNH PHỐ">
          <Input />
        </Form.Item>
        <Button style={{ marginLeft: '150px', color: 'black' }} type='primary'>YÊU CẦU BÁO GIÁ</Button>
      </Form>
    </>
  )
}
