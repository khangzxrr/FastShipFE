import { createSlice } from "@reduxjs/toolkit";

export const getOrderByIdSlice = createSlice({
    name: 'getOrderById',
    initialState: {
        order: {}
    },
    reducers: {
        clearOrder: (state) => {
            state.order = {}
        },
        getOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order
        }
    }
})

export const { getOrderByIdSuccessfully, clearOrder } = getOrderByIdSlice.actions