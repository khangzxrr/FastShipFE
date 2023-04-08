import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {loginSlice} from "./features/login/loginSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { requestProductSlice } from "./features/requestProduct/requestProductSlice";
import { getAllOrdersSlice } from "./features/getAllOrders/getAllOrdersSlice";
import { getOrderByIdSlice } from "./features/getOrderById/getOrderByIdSlice";
import { employeeGetAllOrdersSlice } from "./features/employeeGetAllOrders/employeeGetAllOrdersSlice";
import { employeeGetOrderByIdSlice } from "./features/employeeGetOrderById/employeeGetOrderByIdSlice";
import { employeeGetOrderChatSlice } from "./features/employeeGetOrderChat/employeeGetOrderChatSlice";
const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    login: loginSlice.reducer,
    requestProduct: requestProductSlice.reducer,
    getAllOrders: getAllOrdersSlice.reducer,
    getOrderById: getOrderByIdSlice.reducer,

    employeeGetAllOrders: employeeGetAllOrdersSlice.reducer,
    employeeGetOrderById: employeeGetOrderByIdSlice.reducer,
    employeeGetOrderChat: employeeGetOrderChatSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer
})