import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Utils } from '../../features/utils/Utils'
export default function Revenue(props) {

    console.log(props)
    return (
        <>
            <div className='revenue'>
                <img
                    src="/wallet.jpeg"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Doanh thu</p>
                <h2>{Utils.formatToVNDCurrency(props.totalPayment)}</h2>
                <Link to="/manager-revenuedetail"><Button type='primary'>CHI TIẾT</Button></Link>
            </div>
        </>
    )
}
