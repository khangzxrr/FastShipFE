import axiosProfile from "../axiosProfile"

export const managerGetShipperOrderAction = (shipperId, pageIndex) => async dispatch => {
    const response = await axiosProfile.get('/manager/shippers/orders', {
        params: {
            shipperId,
            pageIndex
        }
    })

    return response.data
}