import axiosProfile from "../axiosProfile"
import { employeeGetOrderByIdSuccessfully } from "./employeeGetOrderByIdSlice"


export const employeeGetOrderByIdAction = (orderId) => async dispatch => {
    const response = await axiosProfile.get(`/employee/orders/${orderId}`)

    dispatch(employeeGetOrderByIdSuccessfully(response.data))

    return Promise.resolve(response.data)
}