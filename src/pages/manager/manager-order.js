import ManagerMenu from "../../component/manager/ManagerMenu"
import OrderManager from "../../component/manager/OrderManager"
import "../manager/manager.css"
const ManagerOrder = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <OrderManager/>
        </div>
    )
}
export default ManagerOrder