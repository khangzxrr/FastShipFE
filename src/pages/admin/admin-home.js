import { useDispatch, useSelector } from "react-redux"
import AccountManagement from "../../component/admin/AccountManagement"
import AdminMenu from "../../component/admin/AdminMenu"
import ServerReport from "../../component/admin/ServiceReport"
import "../admin/admin.css"
import { useEffect } from "react"
import { logout } from "../../features/login/loginSlice"
import { useNavigate } from "react-router-dom"
const AdminHome = () => {

    const { roleName } = useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (roleName !== 'ADMIN') {
            dispatch(logout())
            navigate('/login')
            return
        }
    }, [roleName])
    return (
        <div className='container'>
            <AdminMenu/>
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div style={{ width: '49%' }}>
                    <ServerReport/>
                </div>
                <div style={{ width: '49%', marginLeft: '2%' }}>
                    <AccountManagement/>
                </div>
            </div>
        </div>
    )
}
export default AdminHome