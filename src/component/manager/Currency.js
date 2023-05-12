import {Table, Space, Modal, Input } from 'antd';
import React, { useState } from 'react'
export default function Currency() {
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
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Ngoại tệ',
      dataIndex: 'ngoaite',
      key: 'ngoaite',
    },
    {
      title: 'Tên ngoại tệ',
      dataIndex: 'ten',
      key: 'ten',
    },
    {
      title: 'Tỷ giá',
      key: 'tygia',
      dataIndex: 'tygia'
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={showModal}>Chỉnh sửa</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      id: '1',
      ngoaite: 'EUR',
      ten: 'Đồng Euro',
      tygia: '25.929,2',
    },
    {
      key: '2',
      id: '2',
      ngoaite: 'JPY',
      ten: 'Yên Nhật',
      tygia:'174,84',
    },
    {
      key: '1',
      id: '1',
      ngoaite: 'EUR',
      ten: 'Đồng Euro',
      tygia: '25.929,2',
    },
    {
      key: '2',
      id: '2',
      ngoaite: 'JPY',
      ten: 'Yên Nhật',
      tygia:'174,84',
    },
  ];
  return (
    <>
    <div className='currency'>
        <h2>TỶ GIÁ</h2>
        <h3>Đơn vị: VNĐ</h3>
        <Table columns={columns} dataSource={data} />
    </div>
    <Modal title="CẬP NHẬT TỶ GIÁ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Tên ngoại tệ: </p>
      <Input/>
      </Modal>
    </>
  )
}
