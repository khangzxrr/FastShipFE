import { createSlice } from "@reduxjs/toolkit";

export const createOrderSlice = createSlice({
    name: 'createOrder',
    initialState: {
        order: {}
    },
    reducers: {
        createOrderSuccess: (state, action) => {
            state.order = action.payload.order
        }
    }
})

export const { createOrderSuccess } = createOrderSlice.actions