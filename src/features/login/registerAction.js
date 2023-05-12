import axiosProfile from "../axiosProfile"
import { loginSuccess } from "./loginSlice"

export const registerAction = (email, password, phoneNumber, address, firstName, lastName) => async dispatch => {
    const response = await axiosProfile.post('/Register',{
        email,
        password,
        phoneNumber,
        address,
        firstName,
        lastName,
        DateOfBirth: "2023-05-10"
    })

    dispatch(loginSuccess(response.data))
    
    return Promise.resolve(response.data)
}