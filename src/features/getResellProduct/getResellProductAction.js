import axiosProfile from "../axiosProfile"

export const getResellProductAction = (pageIndex, pageSize = 10) => async dispatch => {
    const response = await axiosProfile.get('/products/resells', {
        pageIndex,
        pageSize
    })

    return Promise.resolve(response.data)
}