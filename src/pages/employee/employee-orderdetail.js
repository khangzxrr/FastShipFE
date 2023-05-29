import { useLocation, useNavigate } from "react-router-dom"
import Bill from "../../component/orders-employee/Bill"
import OrderDetail from "../../component/orders-employee/OrderDetail"
import OrderInfo from "../../component/orders-employee/OrderInfo"
import ProductInfo from "../../component/orders-employee/ProductInfo"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeeGetOrderByIdAction } from "../../features/employeeGetOrderById/employeeGetOrderByIdAction"
import { logout } from "../../features/login/loginSlice"
import { employeeGetOrderChatAction } from "../../features/employeeGetOrderChat/employeeGetOrderChatAction"
import EmployeeChat from "../../component/orders-employee/EmployeeChat"
import DeliveryOption from "../../component/orders-employee/DeliveryOption"
import EmployeeResell from "../../component/request-employee/EmployeeResell"
const OrderDetailEmployee = () => {

  const { search } = useLocation()

  const { order } = useSelector(state => state.employeeGetOrderById)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const orderId = new URLSearchParams(search).get("orderId")

    if (orderId == null) {
      navigate("/employee-order")
      return
    }

    dispatch(employeeGetOrderByIdAction(orderId))
      .catch(err => {
        if (err.response.status === 401 || err.response.status === 403) {
          //alert('Bạn không có quyền thực thi việc này, vui lòng đăng nhập lại')
          dispatch(logout())
          navigate('/login')
        }
      })
  }, [search])

  return (
    <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
    <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
        <h2>CHI TIẾT ĐƠN HÀNG
          <span style={{float:'right'}}><EmployeeResell/></span>
        </h2>
        <ProductInfo order={order} />
        <h2>THANH TOÁN</h2>
        <Bill order={order} />
    </div>
    <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
        <DeliveryOption order={order} />
        <h2>THÔNG TIN CUSTOMER</h2>
        <OrderDetail order={order} />
        <h2>CẬP NHẬT TRẠNG THÁI ĐƠN HÀNG</h2>
        <OrderInfo order={order} />
        <h2>NỘI DUNG TRAO ĐỔI</h2>
        <EmployeeChat order={order} />
    </div>
</div>
  )
}
export default OrderDetailEmployee