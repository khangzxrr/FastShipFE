import ManagerMenu from "../../component/manager/ManagerMenu"
import ShipperList from "../../component/manager/ShipperList"
import "../manager/manager.css"
const ShipperManagement = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <ShipperList/>
        </div>
    )
}
export default ShipperManagement