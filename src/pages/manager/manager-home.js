
import { useDispatch, useSelector } from "react-redux"
import ManagerMenu from "../../component/manager/ManagerMenu"
import Revenue from "../../component/manager/Revenue"
import "../manager/manager.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../../features/login/loginSlice";
import Order from "../../component/manager/Order"
import Shipper from "../../component/manager/Shipper"
import { managerGetTotalPaymentCost } from "../../features/managerGetTotalPaymentCost/managerGetTotalPaymentCost"
import { message } from "antd"
import { Utils } from "../../features/utils/Utils"
const ManagerHome = () => {

    const [messageApi, messageApiContextHolder] = message.useMessage()

    const { roleName } = useSelector(state => state.login)

    const [totalPayment, setTotalPayment] = useState(0.0)
    

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        
        if (roleName !== 'MANAGER') {
            dispatch(logout())
            navigate('/login')
            return
        }

        dispatch(managerGetTotalPaymentCost())
            .then(response => {
                console.log(response.totalPayment)
                setTotalPayment(response.totalPayment)
            })
            .catch(err => {
                Utils.showErrorNoti(messageApi, 'Lỗi yêu cầu tổng tiền')
                return
            })


    }, [roleName])

    return (
        <div className="container">
            {messageApiContextHolder}
            <ManagerMenu />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div style={{ width: '32%' }}>
                    <Revenue totalPayment={totalPayment} />
                </div>
                <div style={{ width: '32%', marginLeft: '2%', marginRight: '2%' }}>
                    <Shipper messageApi={messageApi}/>
                </div>
                <div style={{ width: '32%' }}>
                    <Order messageApi={messageApi}/>
                </div>
            </div>

        </div>
    )
}
export default ManagerHome