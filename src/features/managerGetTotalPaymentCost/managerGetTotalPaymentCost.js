import axiosProfile from "../axiosProfile"

export const managerGetTotalPaymentCost = () => async dispatch => {
    const response = await axiosProfile.get('/manager/payments/total')

    return Promise.resolve(response.data)
} 