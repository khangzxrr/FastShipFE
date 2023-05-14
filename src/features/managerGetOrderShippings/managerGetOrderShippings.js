import axiosProfile from "../axiosProfile"

export const managerGetOrderShippings = (pageIndex, pageSize) => async dispatch => {
    const response = await axiosProfile.get('/manager/ordershippings', {
        params: {
            pageIndex,
            pageSize
        }
    })

    return Promise.resolve(response.data)
}