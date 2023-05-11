import Currency from "../../component/manager/Currency"
import ManagerMenu from "../../component/manager/ManagerMenu"
import OrderManager from "../../component/manager/OrderManager"
import Revenue from "../../component/manager/Revenue"
import ShipperManager from "../../component/manager/ShipperManager"
import "../manager/manager.css"
const ManagerHome = () => {
    return (
        <div className="container">
            <ManagerMenu />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div style={{ width: '28%', marginRight: '2%' }}>
                    <Revenue />
                </div>
                <div style={{ width: '70%' }}>
                    <OrderManager />
                    <ShipperManager />
                </div>
            </div>

        </div>
    )
}
export default ManagerHome