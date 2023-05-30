import AccountTable from "../../component/admin/AccountTable"
import AdminMenu from "../../component/admin/AdminMenu"
const AdminAccounts = () => {
    return (
        <div className='container'>
            <AdminMenu/>
            <AccountTable/>
        </div>
    )
}
export default AdminAccounts