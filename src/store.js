import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {loginSlice} from "./features/login/loginSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    login: loginSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer
})