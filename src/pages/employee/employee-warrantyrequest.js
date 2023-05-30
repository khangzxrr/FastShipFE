import EmployeeProductWarranty from "../../component/orders-employee/EmployeeProductWarranty"
import InforCustomerWarranty from "../../component/orders-employee/InforCustomerWarranty"
import InforWarranty from "../../component/orders-employee/InforWarranty"
import { Button } from "antd"
const EmployeeWarrantyRequest = () =>{
    return(
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>THÔNG TIN SẢN PHẨM</h2>
                <EmployeeProductWarranty/>
                <Button type='primary' style={{ color: 'black', fontWeight:'bold',marginRight:'10px' }}>CHẤP NHẬN</Button>
                <Button type='primary' style={{ color: 'black',fontWeight:'bold', backgroundColor:'red' }}>TỪ CHỐI</Button>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN KHÁCH HÀNG</h2>
                <InforCustomerWarranty/>
                <h2>NỘI DUNG YÊU CẦU</h2>
                <InforWarranty/>
            </div>
        </div>
    )
}
export default EmployeeWarrantyRequest