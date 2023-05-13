import ManagerMenu from "../../component/manager/ManagerMenu"
import ShipperDetail from "../../component/manager/ShipperDetail"
import "../manager/manager.css"

const ManagerShipperDetail = () =>{
    return(
        <div className="container">
            <ManagerMenu/>
            <ShipperDetail/>
        </div>
    )
}
export default ManagerShipperDetail