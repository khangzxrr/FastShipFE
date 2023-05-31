import { createSlice } from "@reduxjs/toolkit";

export const employeeUpdateProductIssueSlice = createSlice({
    name: 'employeeUpdateProductIssue',
    initialState: {
        productIssue: {
            medias: [],
            productRecord: {}
        }
    },
    reducers: {
        setSelectedProductIssue: (state, action) => {
            state.productIssue = action.payload
        }
    }
})

export const { setSelectedProductIssue } = employeeUpdateProductIssueSlice.actions