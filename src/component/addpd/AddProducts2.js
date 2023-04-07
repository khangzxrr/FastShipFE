import React from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { createOrderAction } from '../../features/createOrder/createOrderAction'
import { useNavigate } from 'react-router-dom'
import { clearProduct } from '../../features/requestProduct/requestProductSlice'
import { getOrderByIdSuccessfully } from '../../features/getOrderById/getOrderByIdSlice'


export default function AddProducts2() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products } = useSelector(state => state.requestProduct)
  const { token } = useSelector(state => state.login)

  function requestCreateOrder() {
    dispatch(createOrderAction(products, token))
      .then((response) => {
        console.log(response)

        //clear added product
        dispatch(clearProduct())
        dispatch(getOrderByIdSuccessfully(response))

        navigate(`/detailod?orderId=${response.order.orderId}`)
      })
  }

  return (
    <div style={{
      width: '30%', margin: '10px 5% 10px 0px', border: '1px solid grey', height: '400px',
      borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
    }}>
      <Button type="primary" style={{ width: '100%', color: 'black', fontWeight: 600 }} onClick={requestCreateOrder}>YÊU CẦU BÁO GIÁ</Button>

    </div>
  )
}
