import { useEffect } from "react";
import EmployeeRequestChat from "../../component/request-employee/EmployeeRequestChat";
import EmployeeRequestInfo from "../../component/request-employee/EmployeeRequestInfo";
import EmployeeRequestProducts from "../../component/request-employee/EmployeeRequestProducts";
import { Button, message, notification } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { employeeGetOrderByIdAction } from "../../features/employeeGetOrderById/employeeGetOrderByIdAction";
import { Utils } from "../../features/utils/Utils";
const EmployeeRequest = () => {

    const [search, setSearch] = useSearchParams()
    const [messageApi, messageContextHolder] = message.useMessage()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function navigateBackToOrdersList() {
        setTimeout(() => {
            navigate('/employee-order')
        }, 2000)
    }

    useEffect(() => {
        const orderId = search.get('orderId')

        if (orderId == null) {
            Utils.showErrorNoti(messageApi, 'Không tìm thấy orderId')
            navigateBackToOrdersList()
            
        }

        dispatch(employeeGetOrderByIdAction(orderId)).then(() => {
            Utils.showSuccessNoti(messageApi, 'Lấy thông tin order thành công')
        })
        .catch(err => {
            Utils.showErrorNoti(messageApi, 'Lấy thông tin order thất bại, vui lòng thử lại')
            navigateBackToOrdersList()
        })
    })

    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            {messageContextHolder}
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>BÁO GIÁ SẢN PHẨM</h2>
                <EmployeeRequestProducts/>
                <EmployeeRequestProducts/>
                <h2 style={{textAlign:'right', marginRight:'20px'}}>TOTAL: 1000 VNĐ </h2>
                <Button type="primary" style={{color:'black'}}>XÁC NHẬN YÊU CẦU BÁO GIÁ</Button>
                <Button type="primary" style={{color:'black', backgroundColor:'red', marginLeft:'10px'}}>CANCEL</Button>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN ORDER</h2>
                <EmployeeRequestInfo/>
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <EmployeeRequestChat/>
            </div>
        </div>
    );
};

export default EmployeeRequest