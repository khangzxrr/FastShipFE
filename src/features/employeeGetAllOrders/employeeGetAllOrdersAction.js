import axiosProfile from "../axiosProfile"
import { employeeGetAllOrdersSuccessfully } from "./employeeGetAllOrdersSlice"


export const employeeGetAllOrdersAction = (token) => async dispatch => {
    const response = await axiosProfile.get('/employee/orders', {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(employeeGetAllOrdersSuccessfully(response.data))

    return Promise.resolve(response.data)
}