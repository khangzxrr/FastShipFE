import axiosProfile from "../axiosProfile"

export const getProductReturnByIdAction = (id) => async dispatch => {
    const response = await axiosProfile.get('/productIssue', {
        params: {
            id
        }
    })

    return Promise.resolve(response.data)
}