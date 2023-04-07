import { createSlice } from "@reduxjs/toolkit";

export const getAllOrdersSlice = createSlice({
    name: 'getAllOrders',
    initialState: {
        orders: []
    },
    reducers: {
        getAllOrdersSuccessfully: (state, action) => {
            state.orders = action.payload.orderRecords
        }
    }

})  

export const { getAllOrdersSuccessfully } = getAllOrdersSlice.actions