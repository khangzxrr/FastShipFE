import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { managerGetTotalOrderShippingsAction } from '../../features/managerGetTotalOrderShippings/managerGetTotalOrderShippingsAction'
import { Utils } from '../../features/utils/Utils'
export default function Shipper(props) {

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(managerGetTotalOrderShippingsAction())
            .then((response) => {
                console.log(response)
                setTotal(response.totalOrderShippings)
            })
            .catch(() => {
                Utils.showErrorNoti(props.messageApi, 'Lỗi vui lòng thử lại')
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
