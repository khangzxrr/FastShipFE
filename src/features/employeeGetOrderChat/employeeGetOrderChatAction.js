import axiosProfile from "../axiosProfile"
import { employeeGetOrderChatSuccessfully } from "./employeeGetOrderChatSlice"


export const employeeGetOrderChatAction = (orderId, token) => async dispatch => {
    const response = await axiosProfile.get(`employee/orders/${orderId}/chats`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(employeeGetOrderChatSuccessfully(response.data))

    return Promise.resolve()
}