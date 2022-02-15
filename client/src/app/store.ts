import { configureStore } from "@reduxjs/toolkit";
import UserMgmtReducer from './features/UserManagement/UserMgmtSlice';

export const store = configureStore({
    reducer:{
        UserMgmt:UserMgmtReducer
    }
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
