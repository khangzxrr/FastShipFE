import axiosProfile from "../axiosProfile"
import { loginSuccess } from "./loginSlice"

export const registerAction = (email, password, phoneNumber, address, fullName) => async dispatch => {
    const response = await axiosProfile.post('/Register',{
        email,
        password,
        phoneNumber,
        address,
        fullName
    })

    dispatch(loginSuccess(response.data))
    
    return Promise.resolve(response.data)
}