import React, { useEffect, useState } from 'react'
import {
    Descriptions, Button, Modal, Input,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { employeeUpdateOrderStatusAction } from '../../features/employeeUpdateOrderStatus/employeeUpdateOrderStatusAction'
import { employeeGetOrderByIdAction } from '../../features/employeeGetOrderById/employeeGetOrderByIdAction'
import { employeeSetOrderStatus } from '../../features/employeeGetOrderById/employeeGetOrderByIdSlice'
import { employeeGetOrderChatAction } from '../../features/employeeGetOrderChat/employeeGetOrderChatAction'

export default function OrderInfo(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChange = (e) => {
        console.log(e);
    };

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
                width: '100%', border: '1px solid grey', marginBottom: '30px',
                borderRadius: '20px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }}>
                <Button type='primary' onClick={showModal} style={{ float: 'right', color: 'black' }}>Cập nhật số kg</Button>
                <Modal title="Cập nhật khối lượng đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input type='number' placeholder="input with clear icon" allowClear onChange={onChange} />
                </Modal>
                <Descriptions title="Order Info">
                    <Descriptions.Item label="Status" span={3} >
                        <select style={{border:'1px solid grey', borderRadius:'10px', padding:'5px'}} onChange={onStatusChange} value={currentStatus}>
                            <option value={"noPayYet"}> Chưa thanh toán </option>
                            <option value={"waitingToOrderFromSeller"}> Đang đợi order hàng</option>
                            <option value={"orderingFromSeller"}> Đang mua hàng từ người bán</option>
                            <option value={"deliverFromUsToVN"}> Đang giao từ US về VN</option>
                            <option value={"inVNwarehouse"}> Đang ở kho VN</option>
                            <option value={"deliverToCustomer"}> Đang giao đến khách hàng</option>
                            <option value={"finished"}> Đã hoàn thành</option>
                        </select>
                    </Descriptions.Item>
                    <Descriptions.Item label="Khối lượng">
                        1
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </>

    )
}
