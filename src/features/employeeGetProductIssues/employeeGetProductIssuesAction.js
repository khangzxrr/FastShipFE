import axiosProfile from "../axiosProfile"

export const employeeGetProductIssuesAction = (pageIndex) => async dispatch => {
    const response = await axiosProfile.get('/employee/productIssues', {
        params: {
            pageIndex
        }
    })

    return Promise.resolve(response.data)
}