import React, { useEffect, useState } from 'react'
import ShipperInfo from './ShipperInfo'
import ShipperOrder from './ShipperOrder'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { managerGetShipperOrderAction } from '../../features/managerGetShipperOrders/managerGetShipperOrderAction'

export default function ShipperDetail() {

    const { shippers } = useSelector(state => state.managerGetShippers)

    const [orders, setOrders] = useState([])

    const [shipper, setShipper] = useState({})

    const [total, setTotal] = useState(0)

    const [search, setSearch] = useSearchParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const shipperId = search.get('shipperId')

        if (shipperId === null){
            alert('Không tìm thấy id của shipper, vui lòng thử lại')
            navigate(-1)
            return
        }

        

        for(var i = 0; i < shippers.length; i++) {
            if (shippers[i].id == shipperId) {
                console.log(shippers[i])
                setShipper(shippers[i])
            }
        }
        


        dispatch(managerGetShipperOrderAction(shipperId, 0))
            .then(response => {
                setOrders(response.records)
                setTotal(response.totalCount)
            })
            .catch(err => {
                alert('có lỗi xảy ra, vui lòng thử lại')
                navigate(-1)
            })

    }, [])
    

    return (
        <div className='shipperdetail'>
        <div style={{width:'100%', marginRight:'2%'}}>
          <h2>THÔNG TIN SHIPPER</h2>
          <ShipperInfo shipper={shipper} />
        </div>
        <div style={{width:'100%'}}>
        <ShipperOrder orders={orders} />
        </div>
    </div>
    )
}
