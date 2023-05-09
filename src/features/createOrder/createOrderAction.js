import axiosProfile from "../axiosProfile"

export const createOrderAction = (productDetails)  => async dispatch =>  {

    const products = productDetails.map(
            function(product){ 
                return { "productId": product.Id, "productQuantity": 1 }
            }
        )

    const response = await axiosProfile.post('/Orders', {
        products
    })

    return Promise.resolve(response.data)
}