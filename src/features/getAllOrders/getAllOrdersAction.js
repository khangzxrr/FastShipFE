import axiosProfile from "../axiosProfile"
import { getAllOrdersSuccessfully } from "./getAllOrdersSlice"


export const getAllOrdersAction = () => async dispatch => {
    const response = await axiosProfile.get('/orders')

    dispatch(getAllOrdersSuccessfully(response.data))

    return Promise.resolve(response.data)
}