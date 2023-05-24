import { createSlice } from "@reduxjs/toolkit";

export const getOrderByIdSlice = createSlice({
    name: 'getOrderById',
    initialState: {
        order: {
            orderDetails: []
        }
    },
    reducers: {
        clearOrder: (state) => {
            state.order = {
                orderDetails: []
            }
        },
        getOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order
        }
    }
})

export const { getOrderByIdSuccessfully, clearOrder } = getOrderByIdSlice.actions