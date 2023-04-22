import React, { useEffect, useState } from 'react'
import {
    Descriptions, Radio
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { employeeUpdateOrderStatusAction } from '../../features/employeeUpdateOrderStatus/employeeUpdateOrderStatusAction'
import { employeeGetOrderByIdAction } from '../../features/employeeGetOrderById/employeeGetOrderByIdAction'
import { employeeSetOrderStatus } from '../../features/employeeGetOrderById/employeeGetOrderByIdSlice'
import { employeeGetOrderChatAction } from '../../features/employeeGetOrderChat/employeeGetOrderChatAction'

export default function OrderInfo(props) {

    const [currentStatus, setCurrentStatus] = useState("noPayYet")
    
    const { token } = useSelector(state => state.login)

    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentStatus(props.order.status)
    }, [props.order])

    function onStatusChange(e) {
        
        setCurrentStatus(e.target.value)
        console.log(e.target.value)

        dispatch(employeeUpdateOrderStatusAction(props.order.orderId, e.target.value, token))
            .then(() => {
                employeeSetOrderStatus(e.target.value)
                dispatch(employeeGetOrderByIdAction(props.order.orderId, token))
                dispatch(employeeGetOrderChatAction(props.order.orderId, token))
            })
            .catch(err => {
                alert(err)
            })
        
    }

    return (
        <>
            <div style={{
                width: '100%', border: '1px solid grey',marginBottom:'30px',
                borderRadius: '20px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }}>
                <Descriptions title="Order Info">
                    <Descriptions.Item label="Status" span={3} >
                        <Radio.Group onChange={onStatusChange} value={currentStatus}>
                            <Radio value={"noPayYet"}> Chưa thanh toán </Radio>
                            <Radio value={"waitingToOrderFromSeller"}> Đang đợi order hàng </Radio>
                            <Radio value={"orderingFromSeller"}> Đang mua hàng từ người bán </Radio>
                            <Radio value={"deliverFromUsToVN"}> Đang giao từ US về VN </Radio>
                            <Radio value={"inVNwarehouse"}> Đang ở kho VN </Radio>
                            <Radio value={"deliverToCustomer"}> Đang giao đến khách hàng </Radio>
                            <Radio value={"finished"}> Đã hoàn thành </Radio>
                        </Radio.Group></Descriptions.Item>

                </Descriptions>
            </div>
        </>

    )
}
