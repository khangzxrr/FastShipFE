import AccountManagement from "../../component/admin/AccountManagement"
import ServerReport from "../../component/admin/ServiceReport"
import "../admin/admin.css"
const AdminHome = () => {
    return (
        <div className='container'>
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div style={{ width: '32%' }}>
                    <ServerReport/>
                </div>
                <div style={{ width: '32%', marginLeft: '2%', marginRight: '2%' }}>
                    <AccountManagement/>
                </div>
                <div style={{ width: '32%' }}>
                </div>
            </div>
        </div>
    )
}
export default AdminHome