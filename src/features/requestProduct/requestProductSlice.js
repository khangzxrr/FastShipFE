import { createSlice } from "@reduxjs/toolkit";

export const requestProductSlice = createSlice({
    name: 'requestProduct',
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = [] //clear products
            state.products.push(action.payload)
        }
    }
})

export const { addProduct } = requestProductSlice.actions