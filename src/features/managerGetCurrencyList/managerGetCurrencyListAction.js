import axiosProfile from "../axiosProfile"

export const managerGetCurrencyListAction = () => async dispatch => {
    const response = await axiosProfile.get('/manager/currencies')

    return Promise.resolve(response.data)
}