import axios from "axios";
import { randomBytes } from "crypto";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USERS } from "../../app/features/UserManagement/UserMgmtSlice";
import { RootState } from "../../app/store";
import DeleteUser from "./DeleteUser";
export default function UserList()
{
    const dispatch = useDispatch();
    const usersData = useSelector((state:RootState)=> state.User);
    // const [users,setData] = useState([]);
    useEffect(() => {
        
        axios.get("http://localhost:3001/get-users")
        .then((res) => {
           
            if(res && res.status === 200)
            {
                dispatch(GET_USERS(res.data));
            }
            
        }).catch((err) => {
           
            console.log(err);
        })
    

    },[usersData.length]); // get the  current length and when it changed we refresh the user list
    return (<>
            <h1>Users List</h1>
            <hr />
            {(usersData.length <= 0) ? <h3>No User found</h3> :""}
                {usersData.map((user:any)=>{
                    return (
                        <ul key={Math.random()}>
                            <li>{user['Name']} - <b>({user['Email']})</b> | <DeleteUser user={user['Name']} userID={user['_id']} /></li>
                        </ul>
                    )
                })}
    </>)
}