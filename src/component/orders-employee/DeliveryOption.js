import React from 'react'
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { employeeCreateOrderShippingAction } from '../../features/employeeCreateOrderShipping/employeeCreateOrderShippingAction';


export default function DeliveryOption(props) {
    

    const dispatch = useDispatch()

    function deliveryByShipper(isUsing3rd = false) {
        dispatch(employeeCreateOrderShippingAction(props.order.orderId, isUsing3rd, ""))
            .then((response) => {

                if (response.message === "OK") {
                    alert('Đã giao đơn hàng cho shipper thành công');
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data)
            })
    }


    return (
        <>
            <div style={{
                width: '100%', border: '1px solid grey',
                borderRadius: '20px', marginBottom: '30px', padding: '20px 20%', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }}>
                {
                    props.order.localOrderShippingStatus === "notInQueue" && (
                        <div>
                            <Button style={{ color: 'black', width:'100%', marginBottom:'10px' }} type="primary" onClick={() => deliveryByShipper(false)}>
                                Giao hàng bằng nhân viên
                            </Button>
                            <Button style={{ color: 'black',width:'100%'}} type="primary" onClick={() => deliveryByShipper(true)}>
                                Giao hàng bằng bên thứ 3
                            </Button>
                        </div>
                    )
                }
                {
                props.order.localOrderShippingStatus !== "notInQueue"  && (
                    <span>{props.order.localOrderShippingStatus === "inQueue" ? "Đang trong hàng chờ shipper nhận đơn" : "Shipper đã nhận đơn"} </span>
                )
                }
                    
                

            </div>
        </>

    )
}
