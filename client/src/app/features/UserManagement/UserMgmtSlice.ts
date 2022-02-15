import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import UserInterface from "./Interfaces/UserInterface";

const initialState: UserInterface = {
   data:[]
} 


export const UserMgmtSlice = createSlice({
    name:"UserManagement",
    initialState,
    reducers:{
        createUser:(state,action:PayloadAction<UserInterface>) => {
            state.data.push(action.payload);
        },
        getUsers:(state,action:PayloadAction<UserInterface>) => {
            state.data =  action.payload;
        }
    }
});


export const {createUser,getUsers} = UserMgmtSlice.actions;

export default UserMgmtSlice.reducer;