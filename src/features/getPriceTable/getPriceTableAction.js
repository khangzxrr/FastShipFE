import axiosProfile from "../axiosProfile"

export const getPriceTableAction = () => async dispatch => {
    const response = await axiosProfile.get('/priceTable')

    return Promise.resolve(response.data.priceTables)
}