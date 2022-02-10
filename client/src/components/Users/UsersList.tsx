import axios from "axios";
import { useState,useEffect } from "react";
import DeleteUser from "./DeleteUser";
export default function UserList()
{
    const [users,setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/get-users")
        .then((res) => {
           
            if(res && res.status === 200)
            {
                setData(res.data);
            }
            
        }).catch((err) => {
           
            console.log(err);
        })
    },[]);

    return (<>
            <h1>Users List</h1>
                {users.map((user)=>{
                    return (
                        <ul key={user['_id']}>
                            <li>{user['Name']} - <b>({user['Email']})</b> | <DeleteUser user={user['Name']} userID={user['_id']} /></li>
                        </ul>
                    )
                })}
    </>)
}