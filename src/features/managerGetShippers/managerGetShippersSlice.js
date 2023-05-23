import { createSlice } from "@reduxjs/toolkit";

export const managerGetShippersSlice = createSlice({
    name: 'managerGetShippers',
    initialState: {
        shippers: [],
        currentShipper: {},
        totalCount: 0
    },
    reducers: {
        clearAllShippers: (state, action) => {
            
        },
        managerGetShippersSuccessfully: (state, action) => {
            state.shippers = action.payload.records
        }
    }
})

export const { clearAllShippers, managerGetShippersSuccessfully} = managerGetShippersSlice.actions