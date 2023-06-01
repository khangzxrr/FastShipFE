import React from 'react'
import { useState } from 'react';
import { Form, Input, Radio, Space , Button} from 'antd'
const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };
export default function IssueResolve() {
    const [form] = Form.useForm(null);
    const [radioValue, setRadioValue] = useState()

    const handleFormValuesChange = (changedValues) => {
        const fieldName = Object.keys(changedValues)[0];

        if (fieldName === "radio") {
            const value = changedValues[fieldName];
            setRadioValue(value)
        }
    }
    return (
        <div className='container'>
            <h2>YÊU CẦU DỊCH VỤ</h2>
            <Form
                {...layout}
                name="basic"
                onValuesChange={handleFormValuesChange}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', padding: '10px 0px', marginBottom: '30px' }}
            >

                <Form.Item
                    label="YÊU CẦU"
                    name="radio"
                    initialValue={radioValue}
                >
                    <Radio.Group>
                        <Space>
                            <Radio value='doitra'>ĐỔI TRẢ</Radio>
                            <Radio value='baohanh'>BẢO HÀNH</Radio>
                        </Space>
                    </Radio.Group>

                </Form.Item>
                {radioValue === "doitra" && (
                    <Form {...layout}>
                        <Form.Item label="LỖI DO BÊN">
                            <Radio.Group>
                                <Space direction='vertical'>
                                    <Radio value='doitra'>NGƯỜI BÁN</Radio>
                                    <Radio value='baohanh'>FASTSHIP</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                )}
                {radioValue === "baohanh" && (
                    <Form {...layout}>
                        <Form.Item label="ĐỀ NGHỊ">
                            <Radio.Group>
                                <Space direction='vertical'>
                                    <Radio value='doitra'>HOÀN TIỀN</Radio>
                                    <Radio value='baohanh'>ĐỔI MỚI</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                )}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{color:'black'}}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
