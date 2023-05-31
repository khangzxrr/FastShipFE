import React from 'react'
import { Steps } from 'antd'
export default function StepReturn(props) {
    console.log(props)
  return (
    <Steps
    progressDot
    current={props.status}
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
            title: 'Đã thanh toán cho khách'
        },
        {
            title: 'Hoàn thành',
        },
    ]}
/>
  )
}
