import ManagerMenu from "../../component/manager/ManagerMenu"
import RevenueDetails from "../../component/manager/RevenueDetails"
import "../manager/manager.css"
const ManagerRevenueDetails = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <RevenueDetails/>
        </div>
    )
}
export default ManagerRevenueDetails