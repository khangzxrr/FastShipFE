import React from 'react'
import { Table, Tag, Input, DatePicker, Button, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const { Search } = Input;
const { RangePicker } = DatePicker;
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
    <>
      <div className='report'>
        <div className='child'>
          <h2>TOTAL</h2>
          <h3>10000000</h3>
          <RangePicker style={{ width: '30%' }} />
        </div>
      </div>
      <div className='reportdetail'>
        <h2>BÁO CÁO DOANH THU</h2>
        <div className='searchrevenue'>
          <Search placeholder="Search By ID" />
          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} style={{ margin: '0px 10px 0px 10px' }} />
          <Button type='primary'>Search By Date</Button>
        </div>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}
