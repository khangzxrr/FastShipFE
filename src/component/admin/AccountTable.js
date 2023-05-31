import React, { useEffect, useState } from 'react'
import { Table, Space, Radio } from 'antd';
import AccountSearch from './AccountSearch';
import { useDispatch } from 'react-redux';
import { adminGetAccountsAction } from '../../features/adminGetAccounts/adminGetAccountsAction';
import { Link } from 'react-router-dom';
export default function AccountTable() {

    const [accounts, setAccounts] = useState([])
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    function getAccounts(pageIndex = 1) {
        dispatch(adminGetAccountsAction(pageIndex - 1))
            .then(response => {
                setAccounts(response.records)
                setTotal(response.totalCount)
            })
    }

    useEffect(() => {
        getAccounts()
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'PasswordHash',
            dataIndex: 'passwordHash',
            key: 'passwordHash',
        },
        {
            title: 'Role',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: () => <Space>
                <Link to='/admin-insertaccount'>Update</Link>
            </Space>
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: () => <Space>
                <Radio.Group>
                    <Radio value="1">Disable</Radio>
                    <Radio value="2">Enable</Radio>
                </Radio.Group>
            </Space>
        },
    ];
    return (
        <div className='reportdetail'>
            <h2>Account Management</h2>
            <AccountSearch />
            <div className='revenuedetail'>
                <Table columns={columns} dataSource={accounts} pagination={{ total, onChange: getAccounts }} />
            </div>
        </div>
    )
}
