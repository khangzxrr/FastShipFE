import React from 'react'
import { Table,  Input, Button, Select } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { Search } = Input;
const handleChange = (value) => {
  console.log(value);
};
export default function OrderManager() {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      width: 200,
    },
    {
      title: 'Employee ID',
      dataIndex: 'employee',
      key: 'employee',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Pricing',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
    },
  ];
  const data = [
    {
      key: '1',
      id: '123',
      employee:'1122',
      date: 123,
      customer: 'louis',
      price:123,
      status:'on the way',
      payment: 'visa',
    },
  ];
  return (
    <>
      <div className='reportdetail'>
        <h2>BÁO CÁO ĐƠN HÀNG</h2>
        <div className='searchrevenue'>
          <Search placeholder="Search for order ID, employee ID, customer, ..." />
          <Select
            labelInValue
            defaultValue={{
              value: 'On the way',
              label: 'On the way',
            }}
            style={{ margin: '0px 10px 0px 10px', width: 500 }}
            onChange={handleChange}
            options={[
              {
                value: 'On the way',
                label: 'On the way',
              },
              {
                value: 'On the way',
                label: 'On the way',
              },
            ]}
          />
          <Button type='primary'>Search By Status</Button>
        </div>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}