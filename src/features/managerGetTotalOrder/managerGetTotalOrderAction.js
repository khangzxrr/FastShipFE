import axiosProfile from "../axiosProfile"

export const managerGetTotalOrderAction = () => async dispatch => {
    const response = await axiosProfile.get('/manager/orders/total')

    return Promise.resolve(response.data)
}