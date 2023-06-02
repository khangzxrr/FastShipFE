import axiosProfile from "../axiosProfile"

export const employeeGetNextProductIssueStateAction = (productIssueId) => async dispatch => {
    const response = await axiosProfile.get('/employees/productIssues/nextstates', {
        params: {
            productIssueId
        }
    })

    return Promise.resolve(response.data)
}