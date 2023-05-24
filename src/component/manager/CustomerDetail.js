import React, { useEffect, useState } from 'react'
import CustomerInfo from './CustomerInfo'
import CustomerOrder from './CustomerOrder'
import { useDispatch, useSelector } from 'react-redux'
import { managerGetCustomerOrdersAction } from '../../features/managerGetCustomerOrders/managerGetCustomerOrdersAction'
import { useNavigate } from 'react-router-dom'

export default function CustomerDetail() {

  const [orders, setOrders] = useState([])
  const [totalCount, setTotalCount] = useState(0)

  const { selectedCustomer } = useSelector(state => state.managerGetCustomers)

  const dispatch = useDispatch()
  const navigate  = useNavigate()

  function getCustomerOrder(pageIndex = 0) {
      dispatch(managerGetCustomerOrdersAction(selectedCustomer.id, pageIndex))
      .then(response => {
        setOrders(response.records)
        setTotalCount(response.totalCount)

        console.log(response)
      })
      .catch(err => {
        alert('có lỗi xảy ra vui lòng thử lại')
        navigate(-1)
        return
      })
  }

  function onPageChange(pageIndex) {
    getCustomerOrder(pageIndex - 1)
  }

  useEffect(() => {

    if (selectedCustomer === {}){
      alert('vui lòng chọn một khách hàng để xem thông tin')
      navigate(-1)
      return
    }

    getCustomerOrder()

    

  }, [selectedCustomer, dispatch])

  return (
    <div className='shipperdetail' style={{display:'flex'}}>
            <div style={{width:'28%', marginRight:'2%'}}>
                <CustomerInfo customer={selectedCustomer} />
            </div>
            <div style={{width:'70%'}}>
                <CustomerOrder orders={orders} totalCount={totalCount} onPageChange={onPageChange}/>
            </div>
        </div>
  )
}
