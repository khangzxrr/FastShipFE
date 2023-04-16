import axiosProfile from "../axiosProfile"

export const createOrderAction = (productDetails, token)  => async dispatch =>  {

    const products = productDetails.map(
            function(product){ 
                return { "productId": product.Id, "productQuantity": 1 }
            }
        )

    const response = await axiosProfile.post('/Orders', {
        products
    }, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return Promise.resolve(response.data)
}