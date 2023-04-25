import axiosProfile from "../axiosProfile"

export const employeeCreateOrderShippingAction = (orderId, isUsing3rd, shippingDescription) => async dispatch => {
    const response = await axiosProfile.post('/employee/orders/ordershipping/create', {
        orderId,
        isUsing3rd,
        shippingDescription    
    })

    return Promise.resolve(response.data)
}