import React from 'react'
import { Input, Button, Select, Descriptions, Modal } from 'antd'
import { useState } from 'react';
export default function EmployeeRequestProducts() {
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
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='requestproducts' style={{ display: 'flex', padding: '10px', marginRight:'2%' }}>
      <div style={{width:'28%'}}>
        <img
          src="/service2.jpg"
          style={{
            height: '150px',
            width: '100%',
            position:'relative',
            marginTop:'20px'
          }}
        />
        <Button type='primary' style={{ color: 'black',width:'100%'}} onClick={showModal}>Insert</Button>
        <Modal title="INSERT" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Descriptions layout="vertical">
            <Descriptions.Item label="Giá sản phẩm" ><Input /></Descriptions.Item>
            <Descriptions.Item label="Phí xử lý" ><Input /></Descriptions.Item>
            <Descriptions.Item label="Phí phụ thu" ><Input /></Descriptions.Item>
            <Descriptions.Item label="Ghi chú" span={2}><Input /></Descriptions.Item>
            <Descriptions.Item label="SL"><Select
              defaultValue="1"
              style={{
                width: '100%',
              }}
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  label: '1',
                },
              ]}
            /></Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
      <div style={{ padding: '0px 10px', width: '70%', lineHeight:'22px'}}>
        <h2 style={{wordWrap:'break-word'}}>Name:</h2>
        <p>Type:
          <br/>
          Quantity:
          <br/>
          Giá:
          <br/>
          Phí xử lý:
          <br/>
          Phí phụ thu:
          <br/>
          <span style={{ fontWeight: 'bold' }}>Tổng cộng:</span>
          </p>
      </div>
    </div>
  )
}

