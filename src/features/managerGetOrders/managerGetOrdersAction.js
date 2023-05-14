import axiosProfile from "../axiosProfile"

export const managerGetOrdersAction = (pageIndex, pageSize, startDate, endDate, statusName) => async dispatch => {
    
    const response = await axiosProfile.get('/manager/orders', {
        params: {
            startDate,
            endDate,
            statusName,
            pageIndex,
            pageSize
        }
    })

    return Promise.resolve(response.data)
}