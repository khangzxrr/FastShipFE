import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdAction } from "../employeeGetOrderById/employeeGetOrderByIdAction"

export const employeeUpdateOrderAddressAction = (orderId, address) => async dispatch => {

    const response = await axiosProfile.post('/employee/orders/address/update', {
        orderId,
        address
    })

    dispatch(employeeGetOrderByIdAction(orderId))

    return Promise.resolve(response.data)
}