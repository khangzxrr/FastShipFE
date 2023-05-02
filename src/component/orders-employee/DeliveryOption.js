import React from 'react'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { employeeCreateOrderShippingAction } from '../../features/employeeCreateOrderShipping/employeeCreateOrderShippingAction';
import { employeeGetOrderByIdAction } from '../../features/employeeGetOrderById/employeeGetOrderByIdAction';
import { employeeMarkFinishDeliveryBy3RdAction } from '../../features/employeeMarkFinishDeliveryBy3rd/employeeMarkFinishDeliveryBy3rdAction';
import { employeeGetOrderChatAction } from '../../features/employeeGetOrderChat/employeeGetOrderChatAction';


export default function DeliveryOption(props) {


    const dispatch = useDispatch()

    function deliveryByShipper(isUsing3rd = false) {
        dispatch(employeeCreateOrderShippingAction(props.order.orderId, isUsing3rd, ""))
            .then((response) => {

                if (response.message === "OK") {

                    dispatch(employeeGetOrderByIdAction(props.order.orderId))
                    dispatch(employeeGetOrderChatAction(props.order.orderId))

                    alert('Đã giao đơn hàng cho shipper thành công');
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data)
            })
    }

    function markFinishBy3rdDeliver() {
        dispatch(employeeMarkFinishDeliveryBy3RdAction(props.order.orderId))
            .then(() => {

                dispatch(employeeGetOrderByIdAction(props.order.orderId))
                dispatch(employeeGetOrderChatAction(props.order.orderId))

                alert('đã điều chỉnh trạng thái thành giao hàng thành công!');
            })
    }


    return (
        <>
            {
                (props.order.localOrderShippingStatus !== 'delivered' && props.order.status === 'inVNwarehouse') &&
                (<div style={{
                    width: '100%', border: '1px solid grey',
                    borderRadius: '20px', marginBottom: '30px', padding: '20px 20%', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                }}>
                    {
                        props.order.localOrderShippingStatus === "notInQueue" && (
                            <div>
                                <Button style={{ color: 'black', width: '100%', marginBottom: '10px' }} type="primary" onClick={() => deliveryByShipper(false)}>
                                    Giao hàng bằng nhân viên
                                </Button>
                                <Button style={{ color: 'black', width: '100%' }} type="primary" onClick={() => deliveryByShipper(true)}>
                                    Giao hàng bằng bên thứ 3
                                </Button>
                            </div>
                        )
                    }
                    {
                        props.order.localOrderShippingStatus !== "notInQueue" && (
                            <div>
                                <span>{props.order.localOrderShippingStatus === "inQueue" ? "Đang trong hàng chờ shipper nhận đơn" : "Shipper đã nhận đơn"} </span>

                                {
                                    props.order.localOrderShippingStatus === "assignedTo3rdShipper" && (
                                        <Button style={{ color: 'black', width: '100%' }} type="primary" onClick={() => markFinishBy3rdDeliver()}>
                                            Đánh dấu giao thành công
                                        </Button>
                                    )
                                }
                            </div>
                        )
                    }
                </div>)
            }

        </>

    )
}
