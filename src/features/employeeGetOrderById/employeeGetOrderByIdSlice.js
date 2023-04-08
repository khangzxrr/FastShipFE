import { createSlice } from "@reduxjs/toolkit";

export const employeeGetOrderByIdSlice = createSlice({
    name: 'employeeGetOrderById',
    initialState: {
        order: {}
    },
    reducers: {
        employeeGetOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order
        }
    }
})

export const { employeeGetOrderByIdSuccessfully } = employeeGetOrderByIdSlice.actions