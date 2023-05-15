import React from 'react'
import { Utils } from '../../features/utils/Utils'

export default function Bill(props) {
  return (
    <>
        <h1>Thanh toán</h1>
        <div style={{ width: '100%', display:'flex' }}>
          <div style={{ width: '50%', color: 'grey' }}>
            <h3>TỔNG CỘNG</h3>
          </div>
          <div style={{ width: '50%', textAlign: 'right' }}>
            <h3>{Utils.formatToVNDCurrency(props.order.price)}</h3>
          </div>
        </div>
        <div style={{ width: '100%', display:'flex'}}>
          <div style={{ width: '50%', color: 'grey' }}>
            <h3>CÒN LẠI</h3>
          </div>
          <div style={{ width: '50%', textAlign: 'right' }}>
            <h3>{Utils.formatToVNDCurrency(props.order.remainCost)}</h3>
          </div>
        </div>
    </>
  )
}
