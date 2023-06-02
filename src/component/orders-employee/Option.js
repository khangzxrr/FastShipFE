import React from 'react'
import { Dropdown, Space } from 'antd'
import {CiMenuKebab} from 'react-icons/ci'
import { Link } from 'react-router-dom';
export default function Option() {
    const items = [
        {
            label: <Link to='/employee-requestwarranty'>Tạo đơn bảo hành/ đổi trả</Link>,
            key: '1',
        },
        {
            label: <a>Cập nhật số kg</a>,
            key: '2',
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