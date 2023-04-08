import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdSuccessfully } from "./employeeGetOrderByIdSlice"


export const employeeGetOrderByIdAction = (orderId, token) => async dispatch => {
    const response = await axiosProfile.get(`/employee/orders/${orderId}`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(employeeGetOrderByIdSuccessfully(response.data))

    return Promise.resolve()
}