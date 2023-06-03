import React, { useState } from 'react'
import "../../component/home/home.css"
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../../features/login/registerAction'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, Input, Row, message } from "antd";

export default function InputForm() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products } = useSelector(state => state.requestProduct)

  const [messageApi, messageApiContextHolder] = message.useMessage()

  const onFinish = (values) => {
    console.log("Success:", values);

    dispatch(registerAction(values.email, values.password, values.phone, values.address, values.name))
      .then((data) => {

        if (products.length > 0) {
          navigate('/add')
        } else {
          navigate('/home')
        }
      })
      .catch((err) => {

        if (err.response.data.errors) {
          for (let errorKey in err.response.data.errors) {
            alert(err.response.data.errors[errorKey])
          }
        } else {
          alert(err.response.data)
        }

      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  function handleOnRegister() {
    // console.log(email)



  }
  return (


    <Form
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {messageApiContextHolder}
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: "Nhập email!",
              },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                pattern: /^(?:\d*)$/,
                message: "Vui lòng kiểm tra lại số điện thoại",
              },
              {
                max: 13,
                message: 'Chiều dài vượt quá 13 kí tự'
              },
              {
                min: 10,
                message: 'Chiều dài chưa đủ 10 kí tự'
              }
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Nhập tên!",
              },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 8]}>
        <Col span={24}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Địa chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
        </Col>
        <Col span={12} />
      </Row>
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
            hasFeedback
          >
            <Input.Password style={{ height: 40 }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            name="confirm"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác thực mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "Mật khẩu không đúng!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password style={{ height: 40 }} />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          float: "left",
          display: "flex",
          flexDirection: "column",
          marginBottom: '30px'
        }}
      >
        <Button
          style={{ marginTop: 25, color: 'black', fontWeight: 'bold' }}
          type="primary"
          htmlType="submit"
          onClick={handleOnRegister}
        >
          Đăng ký tài khoản
        </Button>
      </div>
    </Form>
  )
}
