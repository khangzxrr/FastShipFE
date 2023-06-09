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
        clearProduct: (state) => {
            state.products = []
        },
        removeProduct: (state, action) => {

            if (state.products.length === 1){
                state.products = []
            } else {
                state.products = state.products.splice(action.payload, 1)
            }

            
        }
    }
})

export const { addProduct, removeProduct, clearProduct } = requestProductSlice.actions