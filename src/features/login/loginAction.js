import axiosProfile from "../axiosProfile"
import { clearAllOrders } from "../getAllOrders/getAllOrdersSlice"
import { clearProduct } from "../requestProduct/requestProductSlice"
import { loginSuccess } from "./loginSlice"

export const logionAction = (email, password) => async dispatch => {
    const response = await axiosProfile.post('/Login',{
        email,
        password
    })
    dispatch(loginSuccess(response.data))
    dispatch(clearProduct())
    dispatch(clearAllOrders())
    return Promise.resolve(response.data)
}