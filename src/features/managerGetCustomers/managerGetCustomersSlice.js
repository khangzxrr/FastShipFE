import { createSlice } from "@reduxjs/toolkit";

export const managerGetCustomersSlice = createSlice({
    name: 'managerGetCustomers',
    initialState: {
        customers: [],
        totalCount: 0,
        selectedCustomer: {}
    },
    reducers: {
        managerGetCustomersSuccessfully: (state, action) => {
            state.customers = action.payload.records
            state.totalCount = action.payload.totalCount
        },
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        }

    }
})

export const { managerGetCustomersSuccessfully, setSelectedCustomer } = managerGetCustomersSlice.actions

