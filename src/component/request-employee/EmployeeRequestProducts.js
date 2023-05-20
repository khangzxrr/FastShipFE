import React from 'react'
import { Input, Button, Select, Descriptions } from 'antd'
export default function EmployeeRequestProducts() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
      <div>
        <img
          src="/service2.jpg"
          style={{
            height: '150px',
            width: '100%',
            marginTop: '20px'
          }}
        />
        <p>Giá sản phẩm:</p>
        <p>Phí xử lý:</p>
        <p>Phí phụ thu:</p>
        <p>SL:</p>
        <p>Note:</p>
      </div>

      <div style={{ padding: '0px 10px', width: '100%' }}>
        <h2>Name:</h2>
        <Descriptions>
          <Descriptions.Item label="Type" span={2}></Descriptions.Item>
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
          <Descriptions.Item label="Giá sản phẩm" span={3}><Input/></Descriptions.Item>
          <Descriptions.Item label="Phí xử lý" span={3}><Input /></Descriptions.Item>
          <Descriptions.Item label="Phí phụ thu" span={3}><Input /></Descriptions.Item>
          <Descriptions.Item label="Ghi chú" span={3}><Input /></Descriptions.Item>
        </Descriptions>
        <Button type='primary' style={{ color: 'black', float: 'right' }}>UPDATE</Button>
      </div>
    </div>
  )
}
