import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { managerGetTotalOrderShippingsAction } from '../../features/managerGetTotalOrderShippings/managerGetTotalOrderShippingsAction'
export default function Shipper() {

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(managerGetTotalOrderShippingsAction())
            .then((response) => {
                console.log(response)
                setTotal(response.totalOrderShippings)
            })

    }, [])

    return (
        <>
            <div className='revenue'>
                <img
                    src="/shipping.png"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Đơn vận chuyển</p>
                <h2>{total}</h2>
                <Link to="/manager-shipper"><Button type='primary'>CHI TIẾT</Button></Link>
            </div>
        </>
    )
}
