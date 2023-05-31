import axiosProfile from "../axiosProfile"
import { setSelectedProductIssue } from "./employeeUpdateProductIssueSlice"

export const employeeUpdateProductIssueStatusAction = (productIssueId, status) => async dispatch => {

    const response = await axiosProfile.patch('/employee/productIssues', {
        status,
        productIssueId
    })

    dispatch(setSelectedProductIssue(response.data.productIssueRecord))

    return Promise.resolve(response.data)
}