import { createSlice } from "@reduxjs/toolkit";

export const getOrderChatSlice = createSlice({
    name: 'getOrderChat',
    initialState: {
        chatMessages: []
    },
    reducers: {
        getOrderChatSuccessfully: (state, action) => {
            state.chatMessages = action.payload.chatMessages
        }
    }
})

export const { getOrderChatSuccessfully } = getOrderChatSlice.actions