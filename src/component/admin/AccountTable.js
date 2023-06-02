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
            title: 'Tên',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'passwordHash',
            key: 'passwordHash',
        },
        {
            title: 'Vai trò',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: () => <Space>
                <Link to='/admin-insertaccount'>Cập nhật</Link>
            </Space>
        },
        {
            title: '',
            dataIndex: '',
            key: '',
            render: () => <Space>
                <Radio.Group>
                    <Radio value="1">Vô hiệu hóa</Radio>
                    <Radio value="2">Mở</Radio>
                </Radio.Group>
            </Space>
        },
    ];
    return (
        <div className='reportdetail'>
            <h2>QUẢN LÝ TÀI KHOẢN</h2>
            <AccountSearch />
            <div className='revenuedetail'>
                <Table columns={columns} dataSource={accounts} pagination={{ total, onChange: getAccounts }} />
            </div>
        </div>
    )
}
