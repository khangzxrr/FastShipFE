import React from 'react'
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;
export default function UpdateProfile() {
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
                        label="Tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input style={{ height: 40 }} />
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
                THÔNG TIN ĐỊA CHỈ
            </h2>

            <Row gutter={[16, 8]}>
                <Col span={12}>
                    <Form.Item
                        style={{ fontWeight: 600 }}
                        label="Điện thoại"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone!",
                            },
                        ]}
                    >
                        <Input style={{ height: 40 }} />
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        style={{ fontWeight: 600 }}
                        label="Địa chỉ đường"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Please input your address!",
                            },
                        ]}
                    >
                        <Input style={{ height: 40 }} />
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
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
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
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!"
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
                <Button
                    style={{ marginTop: 25 }}
                    type="primary"
                    htmlType="submit"
                >
                    Cập nhật
                </Button>
            </div>
        </Form>
    )
}
