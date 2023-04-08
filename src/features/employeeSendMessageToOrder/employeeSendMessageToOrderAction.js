import axiosProfile from "../axiosProfile"
import { employeeGetOrderChatSuccessfully } from "../employeeGetOrderChat/employeeGetOrderChatSlice"

export const employeeSendMessageToOrderAction = (orderId, message,token) => async dispatch => {
    const response = await axiosProfile.post('/employee/orders/sendmessage', {
        orderId,
        message
    }, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(employeeGetOrderChatSuccessfully(response.data))

    return Promise.resolve()
}