import React from 'react'
import { Dropdown, Space } from 'antd'
export default function EmployeeResell() {
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
        >
            <a style={{color:'black'}} onClick={(e) => e.preventDefault()}>
                <Space>
                    ...
                </Space>
            </a>
        </Dropdown>
    )
}