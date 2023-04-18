import axiosProfile from "../axiosProfile"
import { getOrderChatAction } from "../getOrderChat/getOrderChatAction"

export const orderSendMessageAction = (orderId, message) => async dispatch => {

    await axiosProfile.post('/orders/sendmessages', {
        orderId,
        message
    })

    return Promise.resolve()
}