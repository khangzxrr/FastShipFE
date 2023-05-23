import axiosProfile from "../axiosProfile"
import { clearAllOrders } from "../getAllOrders/getAllOrdersSlice"
import { clearOrder } from "../getOrderById/getOrderByIdSlice"
import { clearProduct } from "../requestProduct/requestProductSlice"
import { loginSuccess } from "./loginSlice"

export const loginAction = (email, password) => async dispatch => {
    const response = await axiosProfile.post('/Login',{
        email,
        password
    })
    dispatch(loginSuccess(response.data))
    dispatch(clearProduct())
    dispatch(clearAllOrders())
    dispatch(clearOrder())

    return Promise.resolve(response.data)
}