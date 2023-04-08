import { createSlice } from "@reduxjs/toolkit";

export const employeeGetAllOrdersSlice = createSlice({
    name: 'employeeGetAllOrders',
    initialState: {
        orders: []
    },
    reducers: {
        employeeGetAllOrdersSuccessfully: (state, action) => {
            state.orders = action.payload.orderRecords
        }
    }

})

export const { employeeGetAllOrdersSuccessfully } = employeeGetAllOrdersSlice.actions