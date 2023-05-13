import React from 'react'
import { Table, Input } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
dayjs.extend(customParseFormat);
const { Search } = Input;
const handleChange = (value) => {
  console.log(value);
};
export default function ShipperManager() {
  const columns = [
    {
      title: 'Shipper ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <Link to='/'>{text}</Link>,
    },
    {
      title: 'Shipper Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tổng số đơn đã nhận',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Tổng số tiền đã thu',
      dataIndex: 'total',
      key: 'total',
    },
  ];
  const data = [
    {
      key: '1',
      id: '123',
      name: 'louis',
      order:123,
      total:'1000'
    },
  ];
  return (
    <>
      <div className='report'>
        <div className='child'>
          <h2>TOTAL</h2>
          <h3>1000</h3><span>đơn hàng đã giao</span>
        </div>
      </div>
      <div className='reportdetail'>
        <h2>BÁO CÁO THEO SHIPPER</h2>
        <div className='searchrevenue'>
          <Search placeholder="Search for Shipper ID, name, ..." />
        </div>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}
