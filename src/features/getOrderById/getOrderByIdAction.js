import axiosProfile from "../axiosProfile"
import { getOrderByIdSuccessfully } from "./getOrderByIdSlice"



export const getOrderByIdAction = (orderId) => async dispatch => {
    const response = await axiosProfile.get(`/orders/${orderId}`)

    dispatch(getOrderByIdSuccessfully(response.data))

    return Promise.resolve()
}