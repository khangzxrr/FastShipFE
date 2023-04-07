import axiosProfile from "../axiosProfile"



export const getOrderByIdAction = (orderId, token) => async dispatch => {
    const response = await axiosProfile.get(`/orders/${orderId}`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}