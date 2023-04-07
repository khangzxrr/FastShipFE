import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {loginSlice} from "./features/login/loginSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { requestProductSlice } from "./features/requestProduct/requestProductSlice";
import { getAllOrdersSlice } from "./features/getAllOrders/getAllOrdersSlice";
import { getOrderByIdSlice } from "./features/getOrderById/getOrderByIdSlice";
const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    login: loginSlice.reducer,
    requestProduct: requestProductSlice.reducer,
    getAllOrders: getAllOrdersSlice.reducer,
    getOrderById: getOrderByIdSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer
})