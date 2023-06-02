import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { managerGetShippersAction } from '../../features/managerGetShippers/managerGetShippersAction';
import { useDispatch, useSelector } from 'react-redux';


export default function ShipperList() {

  const dispatch = useDispatch()

  const { shippers } = useSelector(state => state.managerGetShippers)

  function onPageChange(pageNumber){

    dispatch(managerGetShippersAction(pageNumber - 1))
      .then(response => {
        console.log(response)

      })
  }

  useEffect(() => {
    console.log('calling shipper list effect')
    dispatch(managerGetShippersAction(0))
      .then(response => {
        console.log(response)

      })
  }, [])


    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          render:(text) => {
            return (<Link to={'/manager-shipperdetail?shipperId=' + text}>{text}</Link>)
          }
        },
        {
          title: 'Tên',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'shippingAddress',
          key: 'shippingAddress'
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status'
        },
        {
          title: 'Tổng đơn giao',
          dataIndex: 'totalOrderShippings',
          key: 'totalOrderShippings'
        }
      ];
  return (
    <>
      <div className='reportdetail'>
        <h2>Danh sách Shipper</h2>
        <div className='revenuedetail'>
          <Table columns={columns}  dataSource={shippers} rowKey="id" pagination={{ onChange:onPageChange, total: 0 }}/>
        </div>
      </div>
    </>
  )
}
