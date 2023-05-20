import EmployeeRequestChat from "../../component/request-employee/EmployeeRequestChat";
import EmployeeRequestInfo from "../../component/request-employee/EmployeeRequestInfo";
import EmployeeRequestProducts from "../../component/request-employee/EmployeeRequestProducts";
import { Button } from "antd";
const EmployeeRequest = () => {
    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>BÁO GIÁ SẢN PHẨM</h2>
                <EmployeeRequestProducts/>
                <EmployeeRequestProducts/>
                <h2 style={{textAlign:'right', marginRight:'20px'}}>TOTAL: 1000 VNĐ </h2>
                <Button type="primary" style={{color:'black'}}>XÁC NHẬN YÊU CẦU BÁO GIÁ</Button>
                <Button type="primary" style={{color:'black', backgroundColor:'red', marginLeft:'10px'}}>CANCEL</Button>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN REQUEST</h2>
                <EmployeeRequestInfo/>
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <EmployeeRequestChat/>
            </div>
        </div>
    );
};

export default EmployeeRequest