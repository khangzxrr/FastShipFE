import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { managerGetCustomersAction } from '../../features/managerGetCustomers/managerGetCustomersAction';
import { setSelectedCustomer } from '../../features/managerGetCustomers/managerGetCustomersSlice';
import { Utils } from '../../features/utils/Utils';
export default function CustomerList() {

    const dispatch = useDispatch()

    const { customers, totalCount } = useSelector(state => state.managerGetCustomers)

    useEffect(() => {
      dispatch(managerGetCustomersAction())
    }, [dispatch])

    function onChangePage(pageIndex) {
      dispatch(managerGetCustomersAction(pageIndex - 1))
    }

    function onLinkClicked(customer) {
      dispatch(setSelectedCustomer(customer))
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          render:(text, customer) => {
            return <Link to={'/manager-customerdetail' } onClick={() => onLinkClicked(customer)}>{text}</Link>
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
        },
        {
          title: 'total orders',
          dataIndex: 'totalOrdersCount',
          key: 'totalOrdersCount'
        },
        {
          title: 'total payments',
          dataIndex: 'totalPaymentAmount',
          key: 'totalPaymentAmount',
          render: (amount) => (<a>{Utils.formatToVNDCurrency(amount)}</a>)
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
