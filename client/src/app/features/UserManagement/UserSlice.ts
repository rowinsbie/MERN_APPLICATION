import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import { AppThunk,AppDispatch } from "../../store";
import { User } from "./Types";

const initialState : User[] = [];

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        createNewUser(state,action:PayloadAction<User>)
        {
            state.push(action.payload);
        },
        
    }

})


// export const createNewUser = (
//         name:string,
//         email:string,
//         password:string
    
// ):AppThunk => async (dispatch:AppDispatch) => {
//     const newUser : User = {
//         name: name,
//         email:email,
//         password:password
//     }
//     dispatch(UserSlice.actions.createNewUser(newUser))
// }


export const {createNewUser} = UserSlice.actions;

export default UserSlice.reducer;