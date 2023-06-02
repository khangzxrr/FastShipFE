import React, { useEffect, useState } from 'react'
import { Table, Input } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { managerGetOrderShippings } from '../../features/managerGetOrderShippings/managerGetOrderShippings';
dayjs.extend(customParseFormat);
const { Search } = Input;

export default function ShipperManager() {
  const dispatch = useDispatch()
  const [pageCount, setPageCount] = useState(1)
  const [ordershippings, setOrderShippings] = useState([])

  useEffect(() => {
    dispatch(managerGetOrderShippings())
      .then((response) => {
        setPageCount(response.pageCount)
        setOrderShippings(response.orderShippingRecords)  
      })
  }, [])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'MÃ ĐƠN',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (orderId) => <Link to={`/employee-orderdetail?orderId=${orderId}`}>{orderId}</Link>,
    },
    {
      title: 'Tên shipper',
      dataIndex: 'shipperName',
      key: 'shipperName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'shippingStatus',
      key: 'shippingStatus',
    },
    {
      title: 'Mô tả',
      dataIndex: 'shippingDescription',
      key: 'shippingDescription',
    },
    {
      title: 'Ảnh kí nhận',
      dataIndex: 'signatureImageUrl',
      key: 'signatureImageUrl',
    },
  ];

  return (
    <>
      <div className='reportdetail'>
        <h2>BÁO CÁO ĐƠN GIAO HÀNG</h2>
        <div className='revenuedetail'>
          <Table columns={columns} dataSource={ordershippings} pagination={{total: pageCount, defaultPageSize: 10, showSizeChanger: false, pageSizeOptions: ['10']}}/>
        </div>
      </div>
    </>
  )
}
