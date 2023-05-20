import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
export default function ShipperList() {
    const source = [
        {
            key: '1',
            id: 'John Brown',
          },
          {
            key: '2',
            id: 'Jim Green',
          },
          {
            key: '3',
            id: 'Joe Black',
          },
    ]
    const columns = [
        {
          title: 'Name',
          dataIndex: 'id',
          key: 'id',
          render:(text) => <Link to='/manager-shipperdetail'>{text}</Link>
        },
      ];
  return (
    <>
      <div className='reportdetail'>
        <h2>Danh sách Shipper</h2>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={source}/>
        </div>
      </div>
    </>
  )
}
