import Currency from "../../component/manager/Currency"
import ManagerMenu from "../../component/manager/ManagerMenu"
import "../manager/manager.css"
const ManagerCurrency = () =>{
    return(
        <div className="container" style={{marginTop:'20px'}}>
            <ManagerMenu/>
            <Currency/>
        </div>
    )
}
export default ManagerCurrency