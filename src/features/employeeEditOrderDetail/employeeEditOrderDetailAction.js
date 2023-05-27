import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdSuccessfully } from "../employeeGetOrderById/employeeGetOrderByIdSlice"

export const employeeEditOrderDetailAction = (orderId, orderDetailId, propertyName, value) => async dispatch => {
    
    const data = {
        orderId,
        orderDetailId
    }

    if (value === 'true'){
        value = true
    }
    else if (value === 'false') {
        value = false
    }

    data[propertyName] = value 


    const response = await axiosProfile.patch('/employee/orders', data)

    dispatch(employeeGetOrderByIdSuccessfully(response.data))

    return Promise.resolve()
}