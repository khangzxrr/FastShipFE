import axiosProfile from "../axiosProfile"
import { getOrderChatSuccessfully } from "./getOrderChatSlice"



export const getOrderChatAction = (orderId) => async dispatch => {
    const response = await axiosProfile.get(`/orders/${orderId}/chats`)

    dispatch(getOrderChatSuccessfully(response.data))

    return Promise.resolve()
}