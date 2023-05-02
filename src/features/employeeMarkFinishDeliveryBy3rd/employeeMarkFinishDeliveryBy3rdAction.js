import axiosProfile from "../axiosProfile"


export const employeeMarkFinishDeliveryBy3RdAction = (orderId) => async dispatch => {
    await axiosProfile.post(`/employee/orders/ordershipping/3rd/finish`, {
        orderId
    })

    return Promise.resolve()
}