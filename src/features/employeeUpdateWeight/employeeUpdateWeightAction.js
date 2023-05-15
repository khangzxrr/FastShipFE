import axiosProfile from "../axiosProfile"

export const employeeUpdateWeightAction = (orderId, productId, weight) => async dispatch => {
    const response = await axiosProfile.post('/employee/orders/weight/update', {
        weight,
        productId,
        orderId
    })

    return Promise.resolve(response)
}