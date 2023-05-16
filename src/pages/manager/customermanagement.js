import CustomerList from "../../component/manager/CustomerList"
import ManagerMenu from "../../component/manager/ManagerMenu"
import "../manager/manager.css"
const CustomerManagement = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <CustomerList/>
        </div>
    )
}
export default CustomerManagement