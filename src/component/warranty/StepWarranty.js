import React from 'react'
import { Steps } from 'antd'
export default function StepWarranty() {
  return (
    <Steps
    progressDot
    current=''
    items={[
        {
            title: 'Waiting Price Quotating',
        },
        {
            title: 'Deposit',
        },
        {
            title: 'Waiting ordering',
        },
        {
            title: 'Ordering from seller',
        },
        {
            title: 'Delivery US to VN',
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
