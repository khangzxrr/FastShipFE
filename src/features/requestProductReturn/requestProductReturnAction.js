import axiosProfile from "../axiosProfile"

export const requestProductReturnAction = (orderDetailId, isWarranty, series, description, medias) => async dispatch => {

    const response = await axiosProfile.post('/productReturn/request', {
        orderDetailId,
        isWarranty,
        series,
        description,
        medias
    })

    return Promise.resolve(response.data)
}