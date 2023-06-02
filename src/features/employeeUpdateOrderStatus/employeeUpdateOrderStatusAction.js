import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdAction } from "../employeeGetOrderById/employeeGetOrderByIdAction"


export const employeeUpdateOrderStatusAction = (orderId, orderStatus, orderDescription = null) => async dispatch => {
    
    const response = await axiosProfile.post('/employee/order/updateStatus', {
        orderId,
        orderStatus,
        orderDescription
    })
    
    dispatch(employeeGetOrderByIdAction(orderId))

    return Promise.resolve()
}