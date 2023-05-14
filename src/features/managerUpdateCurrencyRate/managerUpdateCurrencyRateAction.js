import axiosProfile from "../axiosProfile"

export const managerUpdateCurrencyRate = (currencyId, rate) => async dispatch => {
    const response = await axiosProfile.post('/manager/currencies/rate/update', {
        currencyId,
        rate
    })

    return Promise.resolve(response.data)
}