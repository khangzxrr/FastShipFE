import { createSlice } from "@reduxjs/toolkit";

export const getAllOrdersSlice = createSlice({
    name: 'getAllOrders',
    initialState: {
        orders: []
    },
    reducers: {
        getAllOrdersSuccessfully: (state, action) => {
            state.orders = action.payload.orderRecords
        },
        clearAllOrders: (state) => {
            state.orders = []
        }
    }

})  

export const { getAllOrdersSuccessfully, clearAllOrders } = getAllOrdersSlice.actions