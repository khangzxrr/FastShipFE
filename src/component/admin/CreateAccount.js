import React from 'react'
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;
export default function CreateAccount() {
    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
  return (
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
          label="HỌ VÀ TÊN"
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
      <Col span={12}>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="SỐ ĐIỆN THOẠI"
          name="phone"
          rules={[
            {
              required: true,
              message: "Nhập số điện thoại!",
            },
          ]}
        >
          <Input style={{ height: 40 }} />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={[16, 8]}>
      <Col span={12}>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="EMAIL"
          name="email"
          rules={[
            {
              required: true,
              message: "Nhập mail!",
            },
          ]}
        >
          <Input style={{ height: 40 }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          initialValue={"Employee"}
          style={{ fontWeight: 600 }}
          label="VAI TRÒ"
          name="role"
          rules={[
            {
              required: true,
              message: "Chọn vai trò!",
            },
          ]}
        >
          <Select size="large">
            <Option value="Employee">Nhân viên</Option>
            <Option value="Customer">Khách hàng</Option>
            <Option value="Manager">Quản lý</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    <h2
      style={{
        fontSize: 16,
        color: "black",
        lineHeight: 1.35,
        fontWeight: 400,
      }}
    >
      THÔNG TIN ĐĂNG NHẬP
    </h2>

    <Row gutter={[16, 8]}>
      <Col span={12}>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="MẬT KHẨU"
          name="password"
          rules={[
            {
              required: true,
              message: "Nhập mật khẩu!",
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
          label="XÁC NHẬN MẬT KHẨU"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Nhập mật khẩu xác thực!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Không trùng!"
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
        float: "right",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 11, color: "red" }}>
        * Các trường được yêu cầu nhập
      </div>

      <Button
        style={{ marginTop: 25, color:'black', fontWeight:'bold' }}
        type="primary"
        htmlType="submit"
      >
        TẠO
      </Button>
    </div>
  </Form>
  )
}
