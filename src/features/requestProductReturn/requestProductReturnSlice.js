import { createSlice } from "@reduxjs/toolkit";

export const requestProductReturnSlice = createSlice({
    name: 'requestProductReturn',
    initialState: {
        orderDetail: {}
    },
    reducers: {

        setRequestProductReturnOrderDetail: (state, action)  => {
            state.orderDetail = action.payload
            console.log(state.orderDetail)
        }
    }

})

export const { setRequestProductReturnOrderDetail } = requestProductReturnSlice.actions