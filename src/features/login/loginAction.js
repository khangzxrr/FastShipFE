import axios from "axios"
import { loginSuccess } from "./loginSlice"

export const logionAction = (email, password) => async dispatch => {
    const response = await axios.post('http://localhost:57679/Login',{
        email,
        password
    })
    dispatch(loginSuccess(response.data))
    return Promise.resolve(response.data)
}