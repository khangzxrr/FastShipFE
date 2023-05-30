import axiosProfile from "../axiosProfile"

export const createPaymentAction = (OrderId, callbackUrl) => async (dispatch, getState) => {

    const response = await axiosProfile.get('/orders/pay', {
        params: {
            OrderId,
            Hostname: callbackUrl
        }
    })

    return Promise.resolve(response.data)
}