import React from 'react'
import { useState } from 'react'
import { Modal, Button, Tooltip, Input } from 'antd';
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
    const { value, onChange } = props;
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue);
        }
    };
    const handleBlur = () => {
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };
    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
    ) : (
        'Input a number'
    );
    return (
        <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
            <Input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Input a number"
                maxLength={16}
            />
        </Tooltip>
    );
};
export default function UpdateWeight() {
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
    const [value, setValue] = useState('');
    return (
        <>
            
            <Button type='primary' onClick={showModal} style={{ color: 'black', float:'right' }}>Cập nhật số kg</Button>
            <Modal title="Cập nhật khối lượng đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <NumericInput
                    style={{
                        width: '100%',
                    }}
                    value={value}
                    onChange={setValue}
                />
            </Modal>
        </>
    )
}
