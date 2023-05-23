import axiosProfile from "../axiosProfile"
import { managerGetShippersSuccessfully } from "./managerGetShippersSlice"


export const managerGetShippersAction = (pageIndex) => async dispatch => {
    const response = await axiosProfile.get('/manager/shippers', {
        params: {
            pageIndex
        }
    })

    dispatch(managerGetShippersSuccessfully(response.data))


    return Promise.resolve(response.data)
}