import axiosProfile from "../axiosProfile"

export const adminGetAccountsAction = (pageIndex) => async dispatch => {
    const response = await axiosProfile.get('/admin/users', {
        params: {
            pageIndex
        }
    })

    return Promise.resolve(response.data)
}