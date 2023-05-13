import axiosProfile from "../axiosProfile"

export const managerGetPaymentsAction = (startDate, endDate) => async dispatch => {
    const response = await axiosProfile.get('/manager/payments', {
        params: {
            startDate,
            endDate,
            pageSize: 10,
            pageIndex: 0
        }
    })

    return Promise.resolve(response.data)
}