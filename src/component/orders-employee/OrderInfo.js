import React, { useEffect, useState } from 'react'
import {
    Button,
    Descriptions, Popconfirm
} from 'antd'
import { useDispatch } from 'react-redux'
import { employeeUpdateOrderStatusAction } from '../../features/employeeUpdateOrderStatus/employeeUpdateOrderStatusAction'
import { employeeMarkResellOrderAction } from '../../features/employeeMarkResellOrder/employeeMarkResellOrderAction'

export default function OrderInfo(props) {


    const [currentStatus, setCurrentStatus] = useState("noPayYet")


    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentStatus(props.order.status)
    }, [props.order])

    function onStatusChange(e) {

        setCurrentStatus(e.target.value)

        dispatch(employeeUpdateOrderStatusAction(props.order.orderId, e.target.value))
            .then(() => {
                
            })
            .catch(err => {
                alert(err)
            })

    }

    function handleResell() {
        dispatch(employeeMarkResellOrderAction(props.order.orderId))
    }

    return (
        <>
            <Descriptions>
                <Descriptions.Item label="Trạng thái" span={3} >
                    <select style={{ border: '1px solid grey', borderRadius: '10px', padding: '5px' }} onChange={onStatusChange} value={currentStatus}>
                        <option value={"noPayYet"}> Chưa thanh toán </option>
                        <option value={"waitingToOrderFromSeller"}> Đang đợi order hàng</option>
                        <option value={"orderingFromSeller"}> Đang mua hàng từ người bán</option>
                        <option value={"deliverFromUsToVN"}> Đang giao từ US về VN</option>
                        <option value={"inVNwarehouse"}> Đang ở kho VN</option>
                        <option value={"deliverToCustomer"}> Đang giao đến khách hàng</option>
                        <option value={"finished"}> Đã hoàn thành</option>
                        <option value={"reselling"}> Bán lại đơn</option>
                    </select>
                </Descriptions.Item>
            </Descriptions>

            {
                props.order.status !== 'reselling' &&
                (
                    <Popconfirm    
                        title="Xác nhận bán lại"
                        description="Bạn có chắc chắn muốn bán lại tất cả sản phẩm của đơn này?"
                        onConfirm={() => handleResell()}
                    >

                        <Button type="primary" style={{color:'black'}}>Bán lại đơn hàng này</Button>
                    </Popconfirm>
                )
            }
            
        </>
    )
}
