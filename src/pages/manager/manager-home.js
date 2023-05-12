
import { useDispatch, useSelector } from "react-redux"
import ManagerMenu from "../../component/manager/ManagerMenu"
import OrderManager from "../../component/manager/OrderManager"
import Revenue from "../../component/manager/Revenue"
import ShipperManager from "../../component/manager/ShipperManager"
import "../manager/manager.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../../features/login/loginSlice";
const ManagerHome = () => {

    const { roleName } = useSelector(state => state.login)
    {}

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(roleName)
        if (roleName !== 'MANAGER') {
            alert('bạn không có quyền xem trang này, vui lòng đăng nhập lại')
            dispatch(logout())
            navigate('/login')
        }
    }, [roleName])

    return (
        <div className="container">
            <ManagerMenu />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div style={{ width: '28%', marginRight: '2%' }}>
                    <Revenue />
                </div>
                <div style={{ width: '70%' }}>
                    <OrderManager />
                    <ShipperManager />
                </div>
            </div>

        </div>
    )
}
export default ManagerHome