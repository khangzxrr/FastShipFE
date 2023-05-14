import React, { useEffect, useState } from 'react'
import { Table,  Input, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useDispatch } from 'react-redux';
import { managerGetOrdersAction } from '../../features/managerGetOrders/managerGetOrdersAction';
import { Utils } from '../../features/utils/Utils';

const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);
const { Search } = Input;

export default function OrderManager() {

  const dispatch = useDispatch()

  const [dates, setDates] = useState([dayjs(new Date()), dayjs(new Date())]);

  const [status, setStatus] = useState({
    value: 'all',
    label: 'tất cả trạng thái'
  })

  const [orders, setOrders] = useState([])

  const handleStatusChange = (value) => {
    setStatus(value)
  };

  function dateChange(dates) {

    if (dates && dates[0] && dates[1]) {

      const startDate = dayjs(dates[0])
      const endDate = dayjs(dates[1])

      setDates([startDate, endDate])
      
      console.log(startDate, endDate)
    }
  }

  function searchOnClick() {

    const startDate = dates[0].format(Utils.apiDateFormat)
    const endDate = dates[1].format(Utils.apiDateFormat)

    console.log(startDate, endDate, status)

    dispatch(managerGetOrdersAction(0, 0, startDate, endDate, status.value))
      .then((response) => {

        console.log(response)
        setOrders(response.orderRecords)

      })
  }

  useEffect(() => {
    dispatch(managerGetOrdersAction(0, 0, null, null))
      .then((response) => {
        console.log(response)
        setOrders(response.orderRecords)
      })
  }, [])

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Ngày',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Mô tả của người dùng',
      dataIndex: 'customerDescription',
      key: 'customerDescription',
    },
    {
      title: 'Địa chỉ giao hàng',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress',
    },
    {
      title: 'Địa chỉ giao hàng',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress',
    },
    {
      title: 'SĐT Liên lạc',
      dataIndex: 'contactPhoneNumber',
      key: 'contactPhoneNumber',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <a>{Utils.formatToVNDCurrency(price)}</a>,
    },
    {
      title: 'Còn lại',
      dataIndex: 'remainCost',
      key: 'remainCost',
      render: (price) => <a>{Utils.formatToVNDCurrency(price)}</a>,
    },
  ];


  return (
    <>
      <div className='reportdetail'>
        <h2>BÁO CÁO ĐƠN HÀNG</h2>
        <div className='searchrevenue'>
        <RangePicker style={{ width: '30%' }} onCalendarChange={dateChange} defaultValue={dates}/>
          <Select
            labelInValue
            defaultValue={status}
            style={{ margin: '0px 10px 0px 10px', width: 500 }}
            onChange={handleStatusChange}
            options={[
              {
                key: 'all',
                value: 'all',
                label: 'tất cả trạng thái'
              },
              {
                key: 'noPayYet',
                value: 'noPayYet',
                label: 'Chưa thanh toán',
              },
              {
                key: 'waitingToOrderFromSeller',
                value: 'waitingToOrderFromSeller',
                label: 'Đang chờ order hàng',
              },
              {
                key: 'orderingFromSeller',
                value: 'orderingFromSeller',
                label: 'Order hàng',
              },
              {
                key: 'deliverFromUsToVN',
                value: 'deliverFromUsToVN',
                label: 'Đang giao từ US về VN',
              },
              {
                key: 'inVNwarehouse',
                value: 'inVNwarehouse',
                label: 'Đang ở kho VN',
              },
              {
                key: 'deliverToCustomer',
                value: 'deliverToCustomer',
                label: 'Đang giao đến người dùng',
              },
              {
                key: 'finished',
                value: 'finished',
                label: 'Giao thành công',
              },
            ]}
          />
          <Button type='primary' onClick={searchOnClick}>Tìm</Button>
        </div>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={orders} />
        </div>
      </div>
    </>
  )
}
