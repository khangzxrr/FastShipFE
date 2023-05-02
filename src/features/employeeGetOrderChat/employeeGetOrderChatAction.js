import axiosProfile from "../axiosProfile"
import { employeeGetOrderChatSuccessfully } from "./employeeGetOrderChatSlice"


export const employeeGetOrderChatAction = (orderId) => async dispatch => {
    const response = await axiosProfile.get(`employee/orders/${orderId}/chats`)

    dispatch(employeeGetOrderChatSuccessfully(response.data))

    return Promise.resolve()
}