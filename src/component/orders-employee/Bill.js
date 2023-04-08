import React from 'react'

export default function Bill(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', marginLeft: '10px' }}>
        <div style={{ width: '50%', color: 'grey' }}>
          <h3>TỔNG CỘNG</h3>
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
          <h3>${props.order.price}</h3>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', marginLeft: '10px' }}>
        <div style={{ width: '50%', color: 'grey' }}>
          <h3>CÒN LẠI</h3>
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
          <h3>${props.order.remainCost}</h3>
        </div>
      </div>
    </>
  )
}
