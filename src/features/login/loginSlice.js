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
            state.roleName = action.payload.roleName
            
        },
        logout: (state) => {
            state.isLogin = false
            state.email = ''
            state.phoneNumber = ''
            state.token = ''
            console.log('logout! ' + state.isLogin)
        }
    }
})

export const { loginSuccess, logout } = loginSlice.actions