import { configureStore } from "@reduxjs/toolkit";
import UserMgmtReducer from './features/UserManagement/UserMgmtSlice';

export const store = configureStore({
    reducer:{
        User:UserMgmtReducer
    }
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
