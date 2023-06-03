import React, { useEffect } from 'react'
import { Button, Col, Form, Input, Row, Select, message } from "antd";
import { Utils } from '../../features/utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerProfileAction } from '../../features/updateCustomerProfile/updateCustomerProfileAction';
const { Option } = Select;
export default function UpdateProfile() {

    const [form] = Form.useForm()

    const { phoneNumber, address, fullName } = useSelector(state => state.login)

    const [messageApi, messageContextHolder] = message.useMessage()

    const dispatch = useDispatch()
    
    useEffect(() => {
        form.setFieldsValue({
            phoneNumber,
            address,
            fullName,
            password: ''
        })

        console.log(phoneNumber)
    }, [phoneNumber, address, fullName])

    const onFinish = (values) => {
        console.log("Success:", values);

        dispatch(updateCustomerProfileAction(values.password, values.phoneNumber, values.address, values.fullName))
        .then(response => {
            Utils.showSuccessNoti(messageApi, 'Cập nhật thành công')
        })
        .catch(() => {
            Utils.showErrorNoti(messageApi, 'Có lỗi xảy ra, vui lòng thử lại')
        })

        
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        Utils.showErrorNoti(messageApi, 'Vui lòng kiểm tra lại dữ liệu')
    };


    return (
        <Form form={form}
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {messageContextHolder}
            <Row gutter={[16, 8]}>
                <Col span={12}>
                    <Form.Item
                        style={{ fontWeight: 600 }}
                        label="Tên"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên!",
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
                        name="phoneNumber"
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

                <Col span={24}>
                    <Form.Item
                        style={{ fontWeight: 600 }}
                        label="Địa chỉ đường"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập địa chỉ",
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
                                message: "Vui lòng nhập mật khẩu!",
                            },
                            {
                                min: 6,
                                message: 'Vui lòng nhập ít nhất 6 kí tự'
                            }
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
                                message: "Vui lòng nhập lại mật khẩu!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "Mật khẩu không khớp!"
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
