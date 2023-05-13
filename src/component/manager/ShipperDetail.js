import React from 'react'
import ShipperInfo from './ShipperInfo'
import ShipperOrder from './ShipperOrder'

export default function ShipperDetail() {
    return (
        <div className='shipperdetail' style={{display:'flex'}}>
            <div style={{width:'28%', marginRight:'2%'}}>
                <ShipperInfo/>
            </div>
            <div style={{width:'70%'}}>
                <ShipperOrder/>
            </div>
        </div>
    )
}
