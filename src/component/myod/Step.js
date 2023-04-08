import React from 'react'
import { Steps } from 'antd';

export default function Step() {
    return (
        <>
            <Steps
            progressDot
                direction="vertical"
                size="large"
                current={1}
                items={[
                    {
                        title: 'Tạo order',
                    },
                    {
                        title: 'Thanh toán lần 1',
                    },
                    {
                        title: 'Đã chấp nhận',
                    },
                    {
                        title: 'Hoàn tất',
                    },
                ]}
            /></>
    )
}
