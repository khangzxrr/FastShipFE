import React from 'react'
import { Utils } from '../../features/utils/Utils'

export default function Bill(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', color: 'grey', textAlign:'left' }}>
          <p>TỔNG CỘNG</p>
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
          <p>{Utils.formatToVNDCurrency(props.order.price)}</p>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', color: 'grey' }}>
          <p>CÒN LẠI</p>
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
          <p>{Utils.formatToVNDCurrency(props.order.remainCost)}</p>
        </div>
      </div>
    </>
  )
}
