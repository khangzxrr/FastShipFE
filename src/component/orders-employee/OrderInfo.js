import React, { useEffect, useState } from 'react'
import {
    Button,
    Descriptions, Popconfirm, Select, message
} from 'antd'
import { useDispatch } from 'react-redux'
import { employeeUpdateOrderStatusAction } from '../../features/employeeUpdateOrderStatus/employeeUpdateOrderStatusAction'
import { employeeMarkResellOrderAction } from '../../features/employeeMarkResellOrder/employeeMarkResellOrderAction'
import { Utils } from '../../features/utils/Utils'

export default function OrderInfo(props) {

    const [loading, setLoading] = useState(false)
    const [messageApi, messageContextHolder] = message.useMessage()
    const [currentStatus, setCurrentStatus] = useState("noPayYet")


    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentStatus(props.order.status)
    }, [props.order])

    function onStatusChange(value) {

        setLoading(true)
        setCurrentStatus(value)

        dispatch(employeeUpdateOrderStatusAction(props.order.orderId, value))
            .then(() => {
                Utils.showSuccessNoti(messageApi, 'Cập nhật trạng thái thành công')
            })
            .catch(err => {
                Utils.showErrorNoti(messageApi, 'Cập nhật trạng thái thất bại')
            })
            .finally(() => {
                setLoading(false)
            })

    }

    function handleResell() {
        dispatch(employeeMarkResellOrderAction(props.order.orderId))
    }

    return (
        <>
        {messageContextHolder}
            <Descriptions>
                <Descriptions.Item label="Trạng thái" span={3} >
                    <Select 
                        style={{width: 300}}
                        value={currentStatus}
                        disabled={loading}
                        loading={loading}
                        onChange={onStatusChange}
                        options={[
                            { value: 'noPayYet', label: 'Chưa thanh toán', disabled: true},
                            { value: 'waitingToOrderFromSeller', label: 'Đang đợi order hàng', disabled: true },
                            { value: 'orderingFromSeller', label: 'Đang mua hàng từ người bán', disabled: currentStatus !== 'waitingToOrderFromSeller'},
                            { value: 'deliverFromUsToVN', label: 'Đang giao từ US về VN', disabled: currentStatus !== 'orderingFromSeller'},
                            { value: 'inVNwarehouse', label: 'Đang ở kho VN', disabled: currentStatus !== 'deliverFromUsToVN'},
                            { value: 'deliverToCustomer', label: 'Đang giao đến khách hàng', disabled: currentStatus !== 'inVNwarehouse' },
                            { value: 'finished', label: 'Đã hoàn thành', disabled: currentStatus !== 'inVNwarehouse'},
                            { value: 'reselling', label: 'Bán lại đơn', disabled: currentStatus !== 'finished' }
                        ]}
                    
                    />
                </Descriptions.Item>
            </Descriptions>

            {
                (
                    <Popconfirm   
                        disabled={currentStatus !== 'finished'} 
                        title="Xác nhận bán lại"
                        description="Bạn có chắc chắn muốn bán lại tất cả sản phẩm của đơn này?"
                        onConfirm={() => handleResell()}
                    >

                        <Button disabled={currentStatus !== 'finished'}  type="primary" style={{color:'black'}}>Bán lại đơn hàng này</Button>
                    </Popconfirm>
                )
            }
            
        </>
    )
}
