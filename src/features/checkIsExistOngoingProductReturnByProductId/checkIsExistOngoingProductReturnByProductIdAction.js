import axiosProfile from "../axiosProfile"

export const checkIsExistOngoingProductReturn = (productId) => async dispatch => {  
    console.log(productId)

    const response = await axiosProfile.get('/productIssue/isExistActive', {
        params: {
            productId
        }
        
    })

    return Promise.resolve(response.data)
}