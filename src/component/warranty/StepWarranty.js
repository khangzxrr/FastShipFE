import React from 'react'
import { Steps } from 'antd'
export default function StepWarranty() {
  return (
    <Steps
    progressDot
    current={0}
    items={[
        {
            title: 'Yêu cầu',
        },
        {
            title: 'Đang duyệt',
        },
        {
            title: 'Đã nhận sản phẩm',
        },
        {
            title: 'Đã gửi đi bảo hành',
        },
        {
            title: 'Đã về kho việt nam',
        },
        {
            title: 'Đang giao',
        },

        {
            title: 'Thành công',
        },
        {
            title: 'In VN warehouse',
        },
        {
            title: 'On delivery',
        },
        {
            title: 'Completed',
        },
    ]}
/>
  )
}
