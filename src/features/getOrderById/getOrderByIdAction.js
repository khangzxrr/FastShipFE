import axiosProfile from "../axiosProfile"
import { getOrderByIdSuccessfully } from "./getOrderByIdSlice"



export const getOrderByIdAction = (orderId, token) => async dispatch => {
    const response = await axiosProfile.get(`/orders/${orderId}`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(getOrderByIdSuccessfully(response.data))
}