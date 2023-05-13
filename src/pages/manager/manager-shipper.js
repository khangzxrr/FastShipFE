import ManagerMenu from "../../component/manager/ManagerMenu"
import ShipperManager from "../../component/manager/ShipperManager"
import "../manager/manager.css"
const ManagerShipper = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <ShipperManager/>
        </div>
    )
}
export default ManagerShipper