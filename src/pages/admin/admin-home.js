import AccountManagement from "../../component/admin/AccountManagement"
import AdminMenu from "../../component/admin/AdminMenu"
import ServerReport from "../../component/admin/ServiceReport"
import "../admin/admin.css"
const AdminHome = () => {
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