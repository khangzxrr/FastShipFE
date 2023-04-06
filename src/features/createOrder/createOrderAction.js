import axiosProfile from "../axiosProfile"
import { createOrderSuccess } from "./createOrderSlice"

export const createOrderAction = (productDetails, token)  => async dispatch =>  {

    const products = productDetails.map(
            function(product){ 
                return { "productURL": product.productURL, "productQuantity": 1 }
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

    dispatch(createOrderSuccess(response.data))
    

    return Promise.resolve(response.data)
}