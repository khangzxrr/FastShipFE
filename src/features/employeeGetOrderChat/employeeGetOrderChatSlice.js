import { createSlice } from "@reduxjs/toolkit";

export const employeeGetOrderChatSlice = createSlice({
    name: 'employeeGetOrderChat',
    initialState: {
        chatMessages: []
    },
    reducers: {
        employeeGetOrderChatSuccessfully: (state, action) => {
            state.chatMessages = action.payload.chatMessages
        }
    }
})

export const { employeeGetOrderChatSuccessfully } = employeeGetOrderChatSlice.actions