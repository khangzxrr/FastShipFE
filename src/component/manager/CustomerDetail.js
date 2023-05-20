import React from 'react'
import CustomerInfo from './CustomerInfo'
import CustomerOrder from './CustomerOrder'

export default function CustomerDetail() {
  return (
    <div className='shipperdetail' style={{display:'flex'}}>
            <div style={{width:'28%', marginRight:'2%'}}>
                <CustomerInfo/>
            </div>
            <div style={{width:'70%'}}>
                <CustomerOrder/>
            </div>
        </div>
  )
}
