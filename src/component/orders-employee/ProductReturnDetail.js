import React from 'react'
import OptionReturn from './OptionReturn'

export default function ProductReturnDetail() {
  return (
    <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
      <div style={{ width: '40%' }}>
        <img
          src=''
          style={{
            height: '150px',
            width: '100%',
            marginTop: '20px',
            marginBottom: '10px'
            , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
          }}
        />
      </div>
      <div style={{ padding: '0px 10px', width: '60%' }}>
        <div>
          <h2>Tên sản phẩm<span style={{ float: 'right' }}><OptionReturn/></span></h2>
          <p>Số lượng: </p>
          <p>Khối lượng: </p>
          <div className='fee'>
            <p>Giá sản phẩm: </p>
            <p>Phụ thu:</p>
            <p>Phí xử lý: </p>
            <p>Phí ship đến kho US: </p>
            <p>Phí trọng lượng theo kg: </p>
          </div>
        </div>
      </div>
    </div>
  )
}
