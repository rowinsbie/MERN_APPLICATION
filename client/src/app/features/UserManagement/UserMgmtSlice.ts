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
        },
        DELETE_USER:(state,{payload}) => {
            let user_list = [...state];
            let updated = user_list.filter(user => user._id !== payload);
            state = updated;
            return state;
        }
    }
});


export const {CREATE_USER,GET_USERS,DELETE_USER} = UserMgmtSlice.actions;

export default UserMgmtSlice.reducer;