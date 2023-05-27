import axiosProfile from "../axiosProfile"

export const createPaymentAction = (OrderId, callbackUrl) => async (dispatch, getState) => {

    const states = getState()

    const { token } = states.login

    console.log(token)

    const response = await axiosProfile.get('/orders/pay', {
        params: {
            OrderId,
            Hostname: callbackUrl
        },
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return Promise.resolve(response.data)
}