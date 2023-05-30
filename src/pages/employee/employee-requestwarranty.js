import EmployeeProductRequestWarranty from "../../component/orders-employee/EmployeeProductRequestWarranty"
import EmployeeInforRequestWarranty from "../../component/orders-employee/EmployeeInforRequestWarranty"

const EmployeeRequestWarranty = () => {
    return (
        <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                <h2>THÔNG TIN SẢN PHẨM</h2>
                <EmployeeProductRequestWarranty/>
            </div>
            <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                <h2>NỘI DUNG YÊU CẦU</h2>
                <EmployeeInforRequestWarranty/>
            </div>
        </div>
    )
}
export default EmployeeRequestWarranty