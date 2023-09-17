import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './slices/accountSlice'
import counterSlice from './slices/counterSlice'


const store = configureStore({
    reducer: {
        account: accountReducer,
        counter: counterSlice
    }
});

export default store;