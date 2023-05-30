import React from 'react'
import { useState } from 'react';
import { Button, Input, Modal, Descriptions, Select } from 'antd';
const { Search } = Input;
export default function AccountSearch() {
    const onSearch = (value) => console.log(value);
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
        <div className='searchrevenue'>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: '100%',
                }}
            />
            <Button onClick={showModal}>Create Account</Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Descriptions title="Tạo tài khoản" layout="vertical">
                    <Descriptions.Item label="UserName" span={3}><Input/></Descriptions.Item>
                    <Descriptions.Item label="Password" span={3}><Input/></Descriptions.Item>
                    <Descriptions.Item label="Email" span={2}><Input/></Descriptions.Item>
                    <Descriptions.Item label="Role" span={1}><Select
      defaultValue="lucy"
      style={{
        width: '100%',
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Employee',
          label: 'employee',
        },
      ]}
    /></Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    )
}
