import axiosProfile from "../axiosProfile"
import { setSelectedProductIssue } from "./employeeUpdateProductIssueSlice"

export const employeeUpdateProductIssueFinishStatusAction = (productIssueId) => async dispatch => {

    const response = await axiosProfile.patch('/employee/productIssues', {
        finishStatus: 'processed',
        productIssueId
    })

    dispatch(setSelectedProductIssue(response.data.productIssueRecord))

    return Promise.resolve(response.data)
}