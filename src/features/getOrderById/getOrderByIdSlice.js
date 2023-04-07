import { createSlice } from "@reduxjs/toolkit";

export const getOrderByIdSlice = createSlice({
    name: 'getOrderById',
    initialState: {
        order: {}
    },
    reducers: {
        getOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order
        }
    }
})

export const { getOrderByIdSuccessfully } = getOrderByIdSlice.actions