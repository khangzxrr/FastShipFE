import React, { useEffect, useState } from 'react'
import { Table, Tag, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const { Search } = Input;
export default function RevenueDetails() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'paymentId',
      key: 'paymentId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'DATE',
      dataIndex: 'paymentDate',
      key: 'paymentDate',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'paymentDescription',
      key: 'paymentDescription',
    },
    {
      title: 'STATUS',
      key: 'paymentStatus',
      dataIndex: 'paymentStatus'
    },
    {
      title: 'TRANSACTIONAL ID',
      key: 'transactionId',
      dataIndex: 'transactionId'
    },
    {
      title: 'AMOUNT',
      key: 'paymentCost',
      dataIndex: 'paymentCost'
    }
  ];
 
  const [payments, setPayments] = useState([])

  function startDateOnChange(date, dateString) {
    console.log(date, dateString);
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(managerGetPaymentsAction('aaa', 'bbb'))
      .then(response => {
        console.log(response)
        setPayments(response.paymentRecords)
      })
  }, [])

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
          <DatePicker defaultValue={dayjs(new Date())} format={Utils.dateFormat} style={{ margin: '0px 10px 0px 10px' }} onChange={startDateOnChange} />
          <DatePicker defaultValue={dayjs(new Date())} format={Utils.dateFormat} style={{ margin: '0px 10px 0px 10px' }}  onChange={startDateOnChange} />
          <Button type='primary'>Search By Date</Button>
        </div>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={payments} />
        </div>
      </div>
    </>
  )
}
