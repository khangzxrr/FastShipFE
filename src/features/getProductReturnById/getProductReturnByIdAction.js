import axiosProfile from "../axiosProfile"

export const getProductReturnByIdAction = (id) => async dispatch => {
    const response = await axiosProfile.get('/productReturn', {
        params: {
            id
        }
    })

    return Promise.resolve(response.data)
}