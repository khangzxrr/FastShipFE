import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function DeliveryOption() {
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
            <div style={{
                width: '100%', border: '1px solid grey',
                borderRadius: '20px', marginBottom: '30px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }}>
                <Button style={{color:'black'}} type="primary" onClick={showModal}>
                    GIAO HÀNG
                </Button>
                <Modal title="GIAO HÀNG" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <button>GIAO HÀNG</button>
                    <button>GIAO HÀNG</button>
                </Modal>
            </div>
        </>

    )
}
