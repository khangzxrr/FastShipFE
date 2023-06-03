import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        email: '',
        phoneNumber: '',
        address: '',
        token: '',
        fullName: ''
    },
    reducers: {
        updateProfile: (state, action) => {
            state.address = action.payload.address
            state.fullName = action.payload.fullName
            state.phoneNumber = action.payload.phoneNumber
        },

        loginSuccess: (state, action) => {
            state.isLogin = true

            state.email = action.payload.email
            state.token = action.payload.token
            state.address = action.payload.address
            state.phoneNumber = action.payload.phoneNumber
            state.roleName = action.payload.roleName
            state.fullName = action.payload.fullName
            
        },
        logout: (state) => {
            state.isLogin = false
            state.email = ''
            state.phoneNumber = ''
            state.token = ''
            state.roleName = ''
            console.log('logout! ' + state.isLogin)
        }
    }
})

export const { loginSuccess, logout, updateProfile } = loginSlice.actions