import axiosProfile from "../axiosProfile"
import { loginSuccess } from "./loginSlice"

export const logionAction = (email, password) => async dispatch => {
    const response = await axiosProfile.post('/Login',{
        email,
        password
    })
    dispatch(loginSuccess(response.data))
    return Promise.resolve(response.data)
}