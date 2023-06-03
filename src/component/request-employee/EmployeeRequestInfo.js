import React from 'react'
import { Descriptions, Button, Modal, Input } from 'antd'
import { AiOutlineEdit } from 'react-icons/ai'
import { useState } from 'react';
import Moment from 'react-moment';
export default function EmployeeRequestInfo(props) {
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
  return (
    <>
      <Descriptions>
        <Descriptions.Item label="Tên khách hàng" span={3}>{props.order.customerName}</Descriptions.Item>
        <Descriptions.Item label="Ngày yêu cầu" span={3}><Moment date={props.order.orderDate} format='DD/MM/YYYY HH:mm' /></Descriptions.Item>
        <Descriptions.Item label="SĐT" span={3}>{props.order.contactPhoneNumber}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ" span={3}>{props.order.deliveryAddress} <a  onClick={showModal}><AiOutlineEdit /></a></Descriptions.Item>
      </Descriptions>
      <Modal title="Thay đổi địa chỉ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input/>
      </Modal>
    </>
  )
}
