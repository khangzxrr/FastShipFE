import axiosProfile from "../axiosProfile"

export const createPaymentAction = (OrderId, hostname) => async (dispatch, getState) => {

    const response = await axiosProfile.get('/orders/pay', {
        params: {
            OrderId,
            Hostname: hostname
        }
    })

    return Promise.resolve(response.data)
}