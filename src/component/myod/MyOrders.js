import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md'
import { Button, Space, Table, Tag, Dropdown, Skeleton } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersAction } from '../../features/getAllOrders/getAllOrdersAction';
import { logout } from '../../features/login/loginSlice';
import { clearOrder } from '../../features/getOrderById/getOrderByIdSlice';
import CustomerMenu from '../warranty/CustomerMenu';

const columns = [
  {
    title: 'MÃ ĐƠN HÀNG',
    dataIndex: 'orderId',
    key: 'id',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'NGÀY ĐẶT HÀNG',
    dataIndex: 'orderDate',
    key: 'time',
  },
  {
    title: 'TÌNH TRẠNG',
    dataIndex: 'orderStatus',
    key: 'time',
  },
  {
    title: '',
    dataIndex: 'orderId',
    key: 'action',
    render: (orderId, { orderStatus }) => {

      let redirectUrl = (orderStatus === "noPriceQuotation") ? "/request" : "/detailod"
      redirectUrl += "?orderId=" + orderId

      return (
      <Space size="middle">
        <Link to={redirectUrl}><span>Chi tiết</span></Link>
      </Space>
      )
    }
  },
];

export default function MyOrders() {

  const [loading, setLoading] = useState(false)




  const { orders } = useSelector(state => state.getAllOrders)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {

    setLoading(true)

    dispatch(clearOrder())
    
    dispatch(getAllOrdersAction())
      .catch((err) => {
        if (err.response.status === 401) {
          //alert('Không có quyền yêu cầu báo giá, vui lòng đăng nhập lại')
          dispatch(logout())
          navigate("/login")
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])

  return (
    <div>
      <CustomerMenu/>
      <div style={{
        width: '90%', margin: '0px 5% 50px 5%',
        borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
      }}>
        <h2>ĐƠN HÀNG CỦA TÔI</h2>
        <p>Bạn hiện đang có <Link to={'/detailod'}>{orders.length}</Link> đơn hàng</p>
        {loading ? (<Skeleton />) : (<Table style={{border:'none'}} columns={columns} dataSource={orders} />)}
      </div>
    </div>
  )
}
