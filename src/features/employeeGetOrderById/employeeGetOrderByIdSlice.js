import { createSlice } from "@reduxjs/toolkit";

export const employeeGetOrderByIdSlice = createSlice({
    name: 'employeeGetOrderById',
    initialState: {
        order: {
            orderDetails: []
        }
    },
    reducers: {
        clearEmployeeGetOrderById: (state, action) => {
            state.order = {
                orderDetails: []
            }
        },
        employeeGetOrderByIdSuccessfully: (state, action) => {
            state.order = action.payload.order

            if (state.order === {}){
                state.order.orderDetails = []
            }
        },
        employeeSetOrderStatus: (state, action) => {
            state.order.status = action.payload
        }
    }
})

export const { employeeGetOrderByIdSuccessfully, employeeSetOrderStatus, clearEmployeeGetOrderById } = employeeGetOrderByIdSlice.actions