import axiosProfile from "../axiosProfile"

export const managerGetTotalOrderShippingsAction = () => async dispatch => {
    const response = await axiosProfile.get('/manager/ordershippings/total')

    return Promise.resolve(response.data)
}