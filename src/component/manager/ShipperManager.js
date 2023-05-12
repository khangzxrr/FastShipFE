import React from 'react'
import { Table } from 'antd'
export default function ShipperManager() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'REPORT',
      dataIndex: 'report',
      key: 'report',
    },
  ];
  const data = [
    {
      key: '1',
      id: '123',
      name: 123,
      report: '123',

    },
    
  ];
  return (
    <>
      <div className='ordermanager'>
        <h1>Shipper Management</h1>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  )
}
