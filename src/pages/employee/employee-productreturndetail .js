import { useSelector } from "react-redux"
import InforReturnDetail from "../../component/orders-employee/InforReturnDetail"
import ProductReturnDetail from "../../component/orders-employee/ProductReturnDetail"
import UpdateStatusReturn from "../../component/orders-employee/UpdateStatusReturn"
const EmployeeProductReturnDetail = () => {

    const { productIssue } = useSelector(state => state.employeeUpdateProductIssue)

    console.log(productIssue)
    return (
        <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                <h2>CHI TIẾT ĐƠN HÀNG</h2>
                <ProductReturnDetail product={productIssue.productRecord}/>
            </div>
            <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                <h2>THÔNG TIN ĐƠN HÀNG</h2>
                <InforReturnDetail productIssue={productIssue}/>
                <h2>CẬP NHẬT TRẠNG THÁI YÊU CẦU</h2>
                <UpdateStatusReturn productIssue={productIssue}/>
            </div>
        </div>
    )
}
export default EmployeeProductReturnDetail