import React from 'react'
import { Table, Space, Popconfirm, Input } from 'antd';
import AccountSearch from './AccountSearch';
const { Search } = Input;
export default function AccountTable() {
    const dataSource = [
        {
            key: '1',
            id: '1',
            name: 'abc',
            role: 'abc',
        },
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: () => <Space>
                <a>Insert</a>
                <Popconfirm title="Sure to disable?">
                    <a>Disable</a>
                </Popconfirm>
            </Space>
        },
    ];
    return (
        <div className='reportdetail'>
            <h2>Account Management</h2>
            <AccountSearch/>
            <div className='revenuedetail'>
                <Table columns={columns} dataSource={dataSource} />
            </div>
        </div>
    )
}
