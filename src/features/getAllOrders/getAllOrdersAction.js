import axiosProfile from "../axiosProfile"
import { getAllOrdersSuccessfully } from "./getAllOrdersSlice"


export const getAllOrdersAction = (token) => async dispatch => {
    const response = await axiosProfile.get('/orders', {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    dispatch(getAllOrdersSuccessfully(response.data))

    return Promise.resolve(response.data)
}