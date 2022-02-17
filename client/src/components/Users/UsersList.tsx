import axios from "axios";
import { randomBytes } from "crypto";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USERS } from "../../app/features/UserManagement/UserMgmtSlice";
import { RootState } from "../../app/store";
import DeleteUser from "./DeleteUser";
import { FaUsers } from 'react-icons/fa';
import { Card } from "react-bootstrap";
import NoDataImg from '../../images/no-data.png';
import { Image } from "react-bootstrap";
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
            <Card>
                <Card.Header  className="form-header">
                <h4><FaUsers /> Users List</h4>
                </Card.Header>
                <Card.Body>
               
         
            <table className="table table-condensed ">
            <thead>
                <tr>
                    
                        <th>Name</th>
                        <th>Email</th>
                        <th>/</th>
                   
                </tr>
                </thead>
                <tbody>
                {(usersData.length <= 0) ? <tr><td colSpan={3}><div className="text-center mt-3">
                        <Image src={NoDataImg} width={350} fluid={true} />
                        <h4>NO USER ACCOUNTS</h4>
                        <p>To add users, you need to fill in the  <b>Create Account</b> form.</p>
                    </div></td></tr> :usersData.map((user:any)=>{
                    return (
                        <tr key={Math.random()}>
                            <td>{user['Name']}</td>
                            <td>{user['Email']} </td>
                            <td> <DeleteUser user={user['Name']} userID={user['_id']} /></td>

                        </tr>
                    )
                })}
              
                </tbody>
                
            </table>
            
                </Card.Body>
            </Card>
           
    </>)
}