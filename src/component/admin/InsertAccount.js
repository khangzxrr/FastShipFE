import React from 'react'
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;
export default function InsertAccount() {
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
                                message: "Nhập email!",
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
                            <Option value="Employee">Employee</Option>
                        </Select>
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
                    style={{ marginTop: 25, color: 'black', fontWeight: 'bold' }}
                    type="primary"
                    htmlType="submit"
                >
                    TẠO
                </Button>
            </div>
        </Form>
    )
}
