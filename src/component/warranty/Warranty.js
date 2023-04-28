import React from 'react'
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
export default function WarrantyPage() {
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
    return (
        <>
            <Form
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
                <Form.Item label="Service">
                    <Radio.Group>
                        <Radio value="1">Bảo hành</Radio>
                        <Radio value="2">Đổi trả</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Nội dung">
                    <Input />
                </Form.Item>
                <Form.Item label="Lý do">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Hình ảnh" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4,
      }}>
                    <Button type='primary' style={{color:'black'}}>Button</Button>
                </Form.Item>
            </Form>
        </>
    )
}
