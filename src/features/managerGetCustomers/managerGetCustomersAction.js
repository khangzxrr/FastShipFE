import axiosProfile from "../axiosProfile"
import { managerGetCustomersSuccessfully } from "./managerGetCustomersSlice"

export const managerGetCustomersAction = (pageIndex = 0) => async dispatch => {
    const response = await axiosProfile.get('/manager/customers', {
        params: {
            pageIndex
        }
    })

    dispatch(managerGetCustomersSuccessfully(response.data))

    return Promise.resolve()
}