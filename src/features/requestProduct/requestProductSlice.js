import { createSlice } from "@reduxjs/toolkit";

export const requestProductSlice = createSlice({
    name: 'requestProduct',
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.splice(action.payload, 1)
        }
    }
})

export const { addProduct, removeProduct } = requestProductSlice.actions