import axiosProfile from "../axiosProfile"

export const requestProductAction = (productUrl, token) => async dispatch => {
    const response = await axiosProfile.get('/products/request', { 
        params: {
            ProductUrl: productUrl
        },
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return Promise.resolve(response.data)
}