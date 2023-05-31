import InforReturnDetail from "../../component/orders-employee/InforReturnDetail"
import ProductReturnDetail from "../../component/orders-employee/ProductReturnDetail"
import UpdateStatusReturn from "../../component/orders-employee/UpdateStatusReturn"
const EmployeeProductReturnDetail = () => {
    return (
        <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                <h2>CHI TIẾT ĐƠN HÀNG</h2>
                <ProductReturnDetail />
            </div>
            <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                <h2>THÔNG TIN ĐƠN HÀNG</h2>
                <InforReturnDetail />
                <h2>CẬP NHẬT TRẠNG THÁI ĐƠN HÀNG</h2>
                <UpdateStatusReturn />
            </div>
        </div>
    )
}
export default EmployeeProductReturnDetail