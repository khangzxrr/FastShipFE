import React from 'react'
import { Input, Button, Select } from 'antd'
export default function EmployeeRequestProducts() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
      <img
        src="/service2.jpg"
        style={{
          height: '150px',
          width: '50%',
          marginTop: '20px'
        }}
      />
      <div style={{ padding: '0px 10px', width: '100%' }}>
        <h2>Name:</h2>
        <p>Quantity:    <Select
          defaultValue="1"
          style={{
            width: 60,
          }}
          onChange={handleChange}
          options={[
            {
              value: '1',
              label: '1',
            },

          ]}
        /></p>
        <p>Note:<Input /></p>
        <p>Fee:<Input /></p>
        <p>Price:<Input /></p>
        <Button type='primary' style={{ color: 'black', float: 'right' }}>UPDATE</Button>
      </div>
    </div>
  )
}
