import axiosProfile from "../axiosProfile"
import { employeeGetAllOrdersSuccessfully } from "./employeeGetAllOrdersSlice"


export const employeeGetAllOrdersAction = () => async dispatch => {
    const response = await axiosProfile.get('/employee/orders')

    dispatch(employeeGetAllOrdersSuccessfully(response.data))

    return Promise.resolve(response.data)
}