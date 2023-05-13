
import { useDispatch, useSelector } from "react-redux"
import ManagerMenu from "../../component/manager/ManagerMenu"
import Revenue from "../../component/manager/Revenue"
import "../manager/manager.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../../features/login/loginSlice";
import Order from "../../component/manager/Order"
import Shipper from "../../component/manager/Shipper"
const ManagerHome = () => {

    const { roleName } = useSelector(state => state.login)
    { }

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
                <div style={{ width: '32%' }}>
                    <Revenue />
                </div>
                <div style={{ width: '32%', marginLeft: '2%', marginRight: '2%' }}>
                    <Shipper/>
                </div>
                <div style={{ width: '32%' }}>
                    <Order/>
                </div>
            </div>

        </div>
    )
}
export default ManagerHome