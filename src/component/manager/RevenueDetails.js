import React, { useEffect, useState } from 'react'
import { Table, DatePicker, Button } from 'antd';
import dayjs from "dayjs"
import { useDispatch } from 'react-redux';

import { managerGetPaymentsAction } from '../../features/managerGetPayments/managerGetPaymentsAction';
import { Utils } from '../../features/utils/Utils';

const { RangePicker } = DatePicker;

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
  const [totalPaymentsCost, setTotalPaymentsCost] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  const [dates, setDates] = useState([dayjs(new Date()), dayjs(new Date())]);

  function dateChange(dates) {
    

    if (dates[0] && dates[1]) {

      const startDate = dayjs(dates[0])
      const endDate = dayjs(dates[1])

      setDates([startDate, endDate])
      
      console.log(startDate, endDate)
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(managerGetPaymentsAction(dates[0].format(Utils.apiDateFormat), dates[1].format(Utils.apiDateFormat)))
      .then(response => {
        console.log(response)
        setPayments(response.paymentRecords)
        setPageCount(response.pageCount)
        setTotalPaymentsCost(response.totalPayment)
      })
  }, [dates])

  return (
    <>
      <div className='report'>
        <div className='child'>
          <h2>TOTAL</h2>
          <h3>{Utils.formatToVNDCurrency(totalPaymentsCost)}</h3>
          <RangePicker style={{ width: '30%' }} onCalendarChange={dateChange} defaultValue={dates}/>
        </div>
      </div>
      <div className='reportdetail'>
        <h2>BÁO CÁO DOANH THU</h2>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={payments} pagination={{total: pageCount, defaultPageSize: 10, showSizeChanger: false, pageSizeOptions: ['10']}}/>
        </div>
      </div>
    </>
  )
}
