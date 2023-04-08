import axiosProfile from "../axiosProfile"


export const employeeUpdateOrderStatusAction = (orderId, orderStatus, token) => async dispatch => {
    
    const response = await axiosProfile.post('/employee/order/updateStatus', {
        orderId,
        orderStatus
    }, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return Promise.resolve()
}