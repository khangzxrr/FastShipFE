import React from 'react'
import { Dropdown, Space } from 'antd'
import {CiMenuKebab} from 'react-icons/ci'
import { Link } from 'react-router-dom';
export default function OptionReturn() {
    const items = [
        {
            label: <Link to='/employee-requestwarranty'>Đổi trả sản phẩm</Link>,
            key: '1',
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
    <a style={{ color: 'black' }} onClick={(e) => e.preventDefault()}>
        <Space>
            <CiMenuKebab />
        </Space>
    </a>
</Dropdown>
  )
}
