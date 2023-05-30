import React from 'react'
import { Image, Descriptions} from 'antd'
export default function InforWarranty() {
    return (
        <Descriptions>
            <Descriptions.Item label="Dịch vụ" span={3}></Descriptions.Item>
            <Descriptions.Item label="Nội dung" span={3}></Descriptions.Item>
            <Descriptions.Item label="Hình ảnh" span={3}>
                <Image src='/service2.jpg' style={{ width: '100px', height: '100px' }} />
            </Descriptions.Item>
        </Descriptions >
    )
}
