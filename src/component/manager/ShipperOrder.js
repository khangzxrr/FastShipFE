import React from 'react'
import { Table } from 'antd'
export default function ShipperOrder() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
    ];
    return (
        <>
            <h2>DANH SÁCH ĐƠN HÀNG ĐÃ NHẬN</h2>
        </>
    )
}
