import React from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
    Select,
    Upload
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
export default function WarrantyPage() {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <>
            <Form>
                <Form.Item label="Dịch vụ">
                    <Radio.Group>
                        <Radio value="1">Bảo hành</Radio>
                        <Radio value="2">Đổi trả</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Lý do">
                    <TextArea style={{resize:'none'}} />
                </Form.Item>
                <Form.Item label="Hình ảnh" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload style={{ width: '100%' }} action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Tải lên
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 4,
                }}>
                    <Button type='primary' style={{ color: 'black' }}>Gửi</Button>
                </Form.Item>
            </Form>
        </>
    )
}
