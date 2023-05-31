import axiosProfile from "../axiosProfile"

export const requestProductIssueAction = (orderDetailId, isWarranty, series, description, medias) => async dispatch => {

    const response = await axiosProfile.post('/productIssue/request', {
        orderDetailId,
        isWarranty,
        series,
        description,
        medias
    })

    return Promise.resolve(response.data)
}