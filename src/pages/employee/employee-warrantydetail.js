import ChatWarrantyDetail from "../../component/orders-employee/ChatWarrantyDetail"
import InforWanrrantyDetail from "../../component/orders-employee/InforWanrrantyDetail"
import ProductRequest from "../../component/orders-employee/ProductRequest"
import UpdateStatusWarranty from "../../component/orders-employee/UpdateStatusWarranty"

const EmployeeWarrantyDetail = () =>{
    return(
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
        <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
            <h2>CHI TIẾT ĐƠN HÀNG</h2>
            <ProductRequest/>
        </div>
        <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
            <h2>THÔNG TIN ĐƠN HÀNG</h2>
            <InforWanrrantyDetail/>
            <h2>CẬP NHẬT TRẠNG THÁI ĐƠN HÀNG</h2>
            <UpdateStatusWarranty/>
            <h2>NỘI DUNG TRAO ĐỔI</h2>
            <ChatWarrantyDetail/>
        </div>
    </div>
    )
}
export default EmployeeWarrantyDetail