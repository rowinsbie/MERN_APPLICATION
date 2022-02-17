import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import UserInfo from "./Interfaces/UserInterface";

const initialState:UserInfo[] = [
]

export const UserMgmtSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        CREATE_USER:(state,action) => {
            state.push(action.payload);
        },
        GET_USERS:(state,action) => {
            state = action.payload;
            return state;
        }
    }
});


export const {CREATE_USER,GET_USERS} = UserMgmtSlice.actions;

export default UserMgmtSlice.reducer;