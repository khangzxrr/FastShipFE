import axiosProfile from "../axiosProfile"
import { updateProfile } from "../login/loginSlice"

export const updateCustomerProfileAction = (password, phoneNumber, address, fullName) => async dispatch => {
    const response = await axiosProfile.put('/updateProfile', {
        password,
        phoneNumber,
        address,
        fullName
    })

    dispatch(updateProfile({ address, phoneNumber, fullName  }))

    return Promise.resolve(response.data)
}