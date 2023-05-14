import axiosProfile from "../axiosProfile"

export const employeeMarkUserTakenFromWarehouseAction = (orderId)  => async dispatch => {
    const response = await axiosProfile.post('/employee/orders/ordershipping/usertaken/finish', {
        orderId
    })

    return Promise.resolve(response.data)
}