import CustomerDetail from "../../component/manager/CustomerDetail"
import ManagerMenu from "../../component/manager/ManagerMenu"
import "../manager/manager.css"

const ManagerCustomerDetail = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <CustomerDetail/>
        </div>
    )
}
export default ManagerCustomerDetail