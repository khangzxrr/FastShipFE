import React from 'react'
import { useState } from 'react'
import { Modal, Button, Tooltip, Input, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { employeeUpdateWeightAction } from '../../features/employeeUpdateWeight/employeeUpdateWeightAction';
import { employeeGetOrderByIdAction } from '../../features/employeeGetOrderById/employeeGetOrderByIdAction';

export default function UpdateWeight(props) {

    const [weight, setWeight] = useState(0)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch()

    const showModal = () => {
        console.log(props.orderId, props.productId)
        setIsModalOpen(true);
    };
    const handleOk = () => {

        dispatch(employeeUpdateWeightAction(props.orderId, props.productId, weight))
            .then((response) => {
                console.log(response)
                dispatch(employeeGetOrderByIdAction(props.orderId))
                
                alert('Cập nhật thành công!')
            })
            .catch((err) => {
                console.log(err.response.data)
                if (err.response.data === 'cannot update weight when in shipper sending state'){
                    alert('Không thể cập nhật vì đơn đã chuyển sang trạng thái giao cho shipper')
                }
                else if (err.resposne.data === 'not in correct state to update weight'){
                    alert('Không thể cập nhật vì trạng thái của đơn hàng không đúng');
                }

                
            })
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const weightOnChange = (newWeight) => {
        setWeight(newWeight)
    }
    const [value, setValue] = useState('');
    return (
        <>
            
            <Button type='primary' onClick={showModal} style={{ color: 'black', float:'right' }}>Cập nhật số kg</Button>
            <Modal title="Cập nhật khối lượng đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <InputNumber value={weight} onChange={weightOnChange}/>
            </Modal>
        </>
    )
}
