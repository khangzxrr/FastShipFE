import { createSlice } from "@reduxjs/toolkit";

export const employeeGetOrderByIdSlice = createSlice({
    name: 'employeeGetOrderById',
    initialState: {
        order: {
            orderDetails: []
        }
    },
    reducers: {
        employeeGetOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order
        },
        employeeSetOrderStatus: (state, action) => {
            state.order.status = action.payload
        }
    }
})

export const { employeeGetOrderByIdSuccessfully, employeeSetOrderStatus } = employeeGetOrderByIdSlice.actions