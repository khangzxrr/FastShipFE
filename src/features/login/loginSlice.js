import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        email: '',
        phoneNumber: '',
        token: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true

            state.email = action.payload.email
            state.token = action.payload.token
            state.phoneNumber = action.payload.phoneNumber
        },
        loginFailure: (state, action) => {
            
        }
    }
})

export const { loginSuccess, loginFailure } = loginSlice.actions