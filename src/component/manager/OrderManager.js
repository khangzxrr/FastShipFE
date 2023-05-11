import React from 'react'
import { Table } from 'antd'
export default function OrderManager() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '30%',
    },
    {
      title: 'DATE',
      dataIndex: 'date',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      filters: [
        {
          text: '1',
          value: '1',
        },
        {
          text: '2',
          value: '2',
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  const data = [
    {
      key: '1',
      id: '123',
      date: 32,
      status: '1',
    },
    {
      key: '2',
      id: '123',
      date: 42,
      status: '2',
    },

  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <div className='ordermanager'>
        <h1>Order Management</h1>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  )
}
