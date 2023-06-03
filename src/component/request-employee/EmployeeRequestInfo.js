import React from 'react'
import { Descriptions, Button, Modal, Input } from 'antd'
import { AiOutlineEdit } from 'react-icons/ai'
import { useState } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { employeeUpdateOrderAddressAction } from '../../features/employeeUpdateOrderAddress/employeeUpdateOrderAddressAction';
import { Utils } from '../../features/utils/Utils';
export default function EmployeeRequestInfo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState(props.order.deliveryAddress)

  const dispatch = useDispatch()

  function onChangeAddress(event) {
    setAddress(event.target.value)
  }

  const showModal = () => {

    setIsModalOpen(true);
  };
  const handleOk = () => {

    dispatch(employeeUpdateOrderAddressAction(props.order.orderId, address))
    .then(res => {
      Utils.showSuccessNoti(props.messageApi, 'Cập nhật thành công')
    })
    .catch(() => {
      Utils.showErrorNoti(props.messageApi, 'Cập nhật thất bại')
    })

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Descriptions>
        <Descriptions.Item label="Tên khách hàng" span={3}>{props.order.customerName}</Descriptions.Item>
        <Descriptions.Item label="Ngày yêu cầu" span={3}><Moment date={props.order.orderDate} format='DD/MM/YYYY HH:mm' /></Descriptions.Item>
        <Descriptions.Item label="SĐT" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ" span={3}>{props.order.deliveryAddress} <a  onClick={showModal}><AiOutlineEdit /></a></Descriptions.Item>
      </Descriptions>
      <Modal title="Thay đổi địa chỉ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input 
          onChange={onChangeAddress}
          value={address}
        />
      </Modal>
    </>
  )
}
