import React from 'react'
import { Dropdown, Space } from 'antd'
import {CiMenuKebab} from 'react-icons/ci'
export default function ResellWarranty() {
    const items = [
        {
            label: <a>Bán lại sản phẩm này</a>,
            key: '0',
        },
    ];
  return (
    <Dropdown
    menu={{
        items,
    }}
    trigger={['click']}
    placement='bottomRight'
>
    <a style={{color:'black'}} onClick={(e) => e.preventDefault()}>
        <Space>
        <CiMenuKebab/>
        </Space>
    </a>
</Dropdown>
  )
}
