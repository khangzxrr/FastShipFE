import React from 'react'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { employeeCreateOrderShippingAction } from '../../features/employeeCreateOrderShipping/employeeCreateOrderShippingAction';
import { employeeGetOrderByIdAction } from '../../features/employeeGetOrderById/employeeGetOrderByIdAction';
import { employeeMarkFinishDeliveryBy3RdAction } from '../../features/employeeMarkFinishDeliveryBy3rd/employeeMarkFinishDeliveryBy3rdAction';
import { employeeGetOrderChatAction } from '../../features/employeeGetOrderChat/employeeGetOrderChatAction';
import { employeeMarkUserTakenFromWarehouseAction } from '../../features/employeeMarkUserTakenFromWarehouse/employeeMarkUserTakenFromWarehouseAction';


export default function DeliveryOption(props) {


    const dispatch = useDispatch()

    function deliveryByShipper(isUsing3rd = false) {
        dispatch(employeeCreateOrderShippingAction(props.order.orderId, isUsing3rd, ""))
            .then((response) => {

                if (response.message === "OK") {

                    dispatch(employeeGetOrderByIdAction(props.order.orderId))

                    alert('Đã giao đơn hàng cho shipper thành công');
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data)
            })
    }

    function userTakenFromWarehouse() {
        dispatch(employeeMarkUserTakenFromWarehouseAction(props.order.orderId))
            .then((response) => {
                dispatch(employeeGetOrderByIdAction(props.order.orderId))

                alert('Đã cập nhật thành công, người dùng đến kho nhận hàng');
            })
    }

    function markFinishBy3rdDeliver() {
        dispatch(employeeMarkFinishDeliveryBy3RdAction(props.order.orderId))
            .then(() => {
                dispatch(employeeGetOrderByIdAction(props.order.orderId))

                alert('đã điều chỉnh trạng thái thành giao hàng thành công!');
            })
    }


    return (
        <>  
            {
                (props.order.localOrderShippingStatus !== 'delivered' && props.order.status === 'inVNwarehouse') &&
                (<div>
                            <h2>PHƯƠNG THỨC VẬN CHUYỂN</h2>
                    {
                        props.order.localOrderShippingStatus === "notInQueue" && (
                            <div>
                                <Button style={{ color: 'black', width: '100%', marginBottom: '10px' }} type="primary" onClick={() => deliveryByShipper(false)}>
                                    Giao hàng bằng nhân viên
                                </Button>
                                <Button style={{ color: 'black', width: '100%', marginBottom: '10px' }} type="primary" onClick={() => deliveryByShipper(true)}>
                                    Giao hàng bằng bên thứ 3
                                </Button>
                                <Button style={{ color: 'black', width: '100%' }} type="primary" onClick={() => userTakenFromWarehouse()}>
                                    Người dùng đến kho nhận
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
