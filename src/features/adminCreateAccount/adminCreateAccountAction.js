import axiosProfile from "../axiosProfile"

export const adminCreateAccountAction = (email, phoneNumber, password, fullname, address, role) => async dispatch => {

    const response = await axiosProfile.put('/admin/users', {
        email,
        phoneNumber,
        password,
        fullname,
        address,
        role
    })

    return Promise.resolve(response.data)
}