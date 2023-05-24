import axiosProfile from "../axiosProfile"

export const managerGetCustomerOrdersAction = (customerId, pageIndex = 0) => async dispatch => {
    const response  = await axiosProfile.get('/managers/customer/orders', {
        params: {
            customerId, 
            pageIndex
        }
    }) 

    return Promise.resolve(response.data)
}