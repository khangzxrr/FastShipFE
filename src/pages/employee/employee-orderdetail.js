import { useLocation, useNavigate } from "react-router-dom"
import Bill from "../../component/orders-employee/Bill"
import OrderDetail from "../../component/orders-employee/OrderDetail"
import OrderInfo from "../../component/orders-employee/OrderInfo"
import ProductInfo from "../../component/orders-employee/ProductInfo"
import Chat from "../../component/myod/Chat"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeeGetOrderByIdAction } from "../../features/employeeGetOrderById/employeeGetOrderByIdAction"
import { logout } from "../../features/login/loginSlice"
import { employeeGetOrderChatAction } from "../../features/employeeGetOrderChat/employeeGetOrderChatAction"
import EmployeeChat from "../../component/orders-employee/EmployeeChat"
import DeliveryOption from "../../component/orders-employee/DeliveryOption"

const OrderDetailEmployee = () => {

    const { search } = useLocation()

    const { token } = useSelector(state => state.login)
    const { order } = useSelector(state => state.employeeGetOrderById)

    const { chatMessages } = useSelector(state => state.employeeGetOrderChat)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      const orderId = new URLSearchParams(search).get("orderId")

      if (orderId == null){
        alert("Không tồn tại orderId")
        navigate("/employee-order")
        return
      }
      
      dispatch(employeeGetOrderByIdAction(orderId, token))
        .then(dispatch(employeeGetOrderChatAction(orderId, token)))
        .catch(err => {
          if (err.response.status === 401 || err.response.status === 403){
            //alert('Bạn không có quyền thực thi việc này, vui lòng đăng nhập lại')
            dispatch(logout())
            navigate('/login')
          }
        })
    }, [search])

    return(
      <>
      <div style={{
            width: '90%', margin: '20px 5% 50px 5%', border: 'none',
            borderRadius: '20px', padding: '10px 20px'
          }}>
            <h2>CHI TIẾT ĐƠN HÀNG</h2>
            <div style={{width:'100%', display:'flex'}}>
              <div style={{width:'70%', marginRight:'2%'}}>
              <OrderDetail order={order}/>
              <OrderInfo order={order}/>
              <EmployeeChat chatMessages={chatMessages} order={order}/>
              </div>
              <div style={{width:'28%'}}>
              <DeliveryOption/>
              </div>
            </div>
            <div style={{width:'100%', display:'flex'}}>
              <div style={{width:'68%', marginRight:'2%'}}>
                <ProductInfo order={order}/>
              </div>
              <div style={{width:'30%'}}>
                <Bill order={order}/>
              </div>
            </div>    
          </div>
      </>
        
    )
}
export default OrderDetailEmployee