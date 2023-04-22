import React from 'react'
import { Table } from 'antd';

export default function DeliveyOrdersList() {
  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Done',
          value: 'Done',
        },
        {
          text: 'Delivering',
          value: 'Delivering',
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      width: '30%',
    },
    {
      title: 'Order Id',
      dataIndex: 'orderId'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'Quận 1',
          value: 'Quận 1',
        },
        {
          text: 'Quận 2',
          value: 'Quận 2',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  const data = [
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },
    {
      key: '1',
      status: 'Done',
      orderId: 32,
      address: 'Quận 1',
    },

  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} scroll={{
      y: 300
    }} />
    </div>
  )
}
