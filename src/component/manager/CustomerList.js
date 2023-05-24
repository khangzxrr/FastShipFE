import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { managerGetCustomersAction } from '../../features/managerGetCustomers/managerGetCustomersAction';
import { setSelectedCustomer } from '../../features/managerGetCustomers/managerGetCustomersSlice';
export default function CustomerList() {

    const dispatch = useDispatch()

    const { customers, totalCount } = useSelector(state => state.managerGetCustomers)

    useEffect(() => {
      dispatch(managerGetCustomersAction())
    }, [dispatch])

    function onChangePage(pageIndex) {
      dispatch(managerGetCustomersAction(pageIndex - 1))
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          render:(text, customer) => {

            console.log(customer)
            dispatch(setSelectedCustomer(customer))

            return <Link to={'/manager-customerdetail' }>{text}</Link>
        }
        },
        {
          title: 'full name',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'phone number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        }
      ];
  return (
    <>
    <div className='reportdetail'>
      <h2>Danh sách Customer</h2>
      <div className='revenuedetail'>
        <Table rowKey={'id'} columns={columns} dataSource={customers} pagination={{  onChange:onChangePage,  total: totalCount }}/>
      </div>
    </div>
  </>
  )
}
