import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdAction } from "../employeeGetOrderById/employeeGetOrderByIdAction"


export const employeeUpdateOrderStatusAction = (orderId, orderStatus) => async dispatch => {
    
    const response = await axiosProfile.post('/employee/order/updateStatus', {
        orderId,
        orderStatus
    })
    
    dispatch(employeeGetOrderByIdAction(orderId))

    return Promise.resolve()
}