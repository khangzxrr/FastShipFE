import axiosProfile from "../axiosProfile"
import { getOrderByIdSuccessfully } from "../getOrderById/getOrderByIdSlice"
import { clearProduct } from "../requestProduct/requestProductSlice"

export const createOrderAction = (productDetails, customerDescription, address, phoneNumber)  => async dispatch =>  {

    const products = productDetails.map(
            function(product){ 
                return { "productId": product.Id, "productQuantity": 1 }
            }
        )

    const response = await axiosProfile.post('/Orders', {
        products,
        customerDescription,
        address,
        phoneNumber
    })

    dispatch(clearProduct())
    dispatch(getOrderByIdSuccessfully(response.data))
    

    return Promise.resolve(response.data)
}