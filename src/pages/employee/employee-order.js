import { useEffect } from "react"
import OrdersList from "../../component/orders-employee/OrdersList"
import { useDispatch, useSelector } from "react-redux"
import { employeeGetAllOrdersAction } from "../../features/employeeGetAllOrders/employeeGetAllOrdersAction"
import { logout } from "../../features/login/loginSlice"
import { useNavigate } from "react-router-dom"
import Menu from "../../component/orders-employee/Menu"

const HomeEmployee = () => {

  const { token } = useSelector(state => state.login)

  const { orders } = useSelector(state => state.employeeGetAllOrders)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(employeeGetAllOrdersAction(token))
      .catch(err => {
        if (err.response.status === 401 || err.response.status === 403){
          alert('Bạn không có quyền truy cập trang này, vui lòng đăng nhập')
          dispatch(logout())
          navigate("/login")
        }
      })
  }, [dispatch])

  return (
    <>
    <Menu/>
    <div style={{
      width: '90%', margin: '0px 5% 50px 5%', border: '1px solid grey',
      borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
    }}>
      <h2>TẤT CẢ ĐƠN HÀNG</h2>
      <p>Bạn hiện đang theo dõi {orders.length} đơn hàng</p>
      <OrdersList />
    </div>
    </>
    
  )
}
export default HomeEmployee