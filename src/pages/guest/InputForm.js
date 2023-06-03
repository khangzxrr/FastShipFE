import React, { useState } from 'react'
import "../../component/home/home.css"
import { useDispatch } from 'react-redux'
import { registerAction } from '../../features/login/registerAction'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, Input, Row } from "antd";

export default function InputForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangeAddress(event) {
    setAddress(event.target.value)
  }

  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleChangePhoneNumber(event) {
    setPhoneNumber(event.target.value)
  }

  function handleChangeFullname(event) {
    setFullname(event.target.value)
  }


  function handleOnRegister() {
    console.log(email)

    dispatch(registerAction(email, password, phoneNumber, address, fullname))
      .then((data) => {
        alert('Đăng kí thành công! vui lòng nhấn yêu cầu báo giá')
        navigate('/add')
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

  }
  return (

    // <Form className='inputform'
    //   labelCol={{
    //     span: 4,
    //   }}
    //   wrapperCol={{
    //     span: 14,
    //   }}
    //   layout="horizontal"
    //   style={{
    //     maxWidth: 600,
    //   }}
    // >
    //   <Form.Item label="EMAIL">
    //     <Input onChange={handleChangeEmail} />
    //   </Form.Item>
    //   <Form.Item label="MẬT KHẨU" >
    //     <Input.Password
    //       onChange={handleChangePassword}
    //       iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    //     />
    //   </Form.Item>
    //   <Form.Item label="NHẬP LẠI MẬT KHẨU" >
    //     <Input.Password
    //       onChange={handleChangePassword}
    //       iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    //     />
    //   </Form.Item>
    //   <Form.Item label="SĐT">
    //     <Input onChange={handleChangePhoneNumber} />
    //   </Form.Item>
    //   <Form.Item label="HỌ">
    //     <Input onChange={handleChangeLastName} />
    //   </Form.Item>
    //   <Form.Item label="TÊN">
    //     <Input onChange={handleChangeFirstName} />
    //   </Form.Item>
    //   <Form.Item label="ĐỊA CHỈ">
    //     <Input onChange={handleChangeAddress} />
    //   </Form.Item>
    //   <Button style={{ marginLeft: '150px', color: 'black' }} type='primary' onClick={handleOnRegister}>ĐĂNG KÝ TÀI KHOẢN</Button>
    // </Form>
    <Form
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Email"
            name="name"
            rules={[
              {
                required: true,
                message: "Nhập email!",
              },
            ]}
          >
            <Input  onChange={handleChangeEmail} style={{ height: 40 }} />
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
                message: "Vui lòng nhập SĐT!",
              },
            ]}
          >
            <Input onChange={handleChangePhoneNumber} style={{ height: 40 }} />
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
            <Input onChange={handleChangeFullname} style={{ height: 40 }} />
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
            <Input onChange={handleChangeAddress} style={{ height: 40 }} />
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
            <Input.Password onChange={handleChangePassword} style={{ height: 40 }} />
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
            <Input.Password onChange={handleChangePassword} style={{ height: 40 }} />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          float: "left",
          display: "flex",
          flexDirection: "column",
          marginBottom:'30px'
        }}
      >
        <Button
          style={{ marginTop: 25, color:'black', fontWeight:'bold'}}
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
