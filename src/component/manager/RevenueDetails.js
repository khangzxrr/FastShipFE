import React from 'react'
import {Table, Tag } from 'antd';
export default function RevenueDetails() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'ACTION',
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'TAGS',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color='green' key={tag}>
                +{tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'TOTAL',
      key: 'total',
      dataIndex: 'total'
    },
  ];
  const data = [
    {
      key: '1',
      id: '123',
      date: 123,
      action: 'TRANFER',
      tags: ['1000'],
      total: 1000
    },
    {
      key: '1',
      id: '123',
      date: 123,
      action: 'TRANFER',
      tags: ['1000'],
      total: 1000
    },
    {
      key: '1',
      id: '123',
      date: 123,
      action: 'TRANFER',
      tags: ['1000'],
      total: 1000
    },
    {
      key: '1',
      id: '123',
      date: 123,
      action: 'TRANFER',
      tags: ['1000'],
      total: 1000
    },
    {
      key: '1',
      id: '123',
      date: 123,
      action: 'TRANFER',
      tags: ['1000'],
      total: 1000
    },
  ];
  return (
    <div className='revenuedetail'>
      <h1>REPORT OVERVIEW</h1>
      <h2>$7,431.14 USD</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
