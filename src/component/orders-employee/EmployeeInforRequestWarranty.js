import React from 'react'
import {
  Descriptions,
  Button,
  Input,
  Radio, Upload
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
export default function EmployeeInforRequestWarranty() {
  const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
  return (
    <>
    <Descriptions>
        <Descriptions.Item label="Dịch vụ" span={3}>
            <Radio.Group>
                <Radio value="1">Bảo hành</Radio>
                <Radio value="2">Đổi trả</Radio>
            </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung" span={3}>
            <TextArea style={{ resize: 'none' }} />
        </Descriptions.Item>
        <Descriptions.Item label="Hình ảnh" span={3} valuePropName="fileList" getValueFromEvent={normFile}>
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
        </Descriptions.Item>
    </Descriptions >
    <Button type='primary' style={{ color: 'black', float:'right', fontWeight:'bold', width:'20%' }}>Tạo</Button>
</>
  )
}
