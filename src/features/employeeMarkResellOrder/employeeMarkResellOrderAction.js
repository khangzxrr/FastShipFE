import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdSuccessfully } from "../employeeGetOrderById/employeeGetOrderByIdSlice"

export const employeeMarkResellOrderAction = (orderId) => async dispatch => {
    const response = await axiosProfile.post('/employee/orders/markResell', {
        orderId
    })

    dispatch(employeeGetOrderByIdSuccessfully(response.data))

    return Promise.resolve()
}