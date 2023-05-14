import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { managerGetTotalOrderAction } from '../../features/managerGetTotalOrder/managerGetTotalOrderAction'
export default function Order() {

    const [totalOrder, setTotalOrder] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(managerGetTotalOrderAction())
            .then((response) => {
                console.log(response.totalOrder)
                setTotalOrder(response.totalOrder)
            })
    }, [dispatch])

    return (
        <>
            <div className='revenue'>
                <img
                    src="/product.png"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <p>Đơn đã tạo</p>
                <h2>{totalOrder}</h2>
                <Link to="/manager-order"><Button type='primary'>CHI TIẾT</Button></Link>
            </div>
        </>
    )
}
