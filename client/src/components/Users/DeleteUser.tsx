import axios from "axios";
import React, {useState} from "react"
import { Button,Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../../app/features/UserManagement/UserMgmtSlice";
import { FaTrashAlt,FaCheckCircle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default function DeleteUser(props:any)
{
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const openTrigger = () => setOpen(true);
    const closeTrigger = () => setOpen(false);
     async function deleteAPI()
    {
       
        const isDeleted =   await axios.post(`http://localhost:3001/delete-user`,{
            userID:props.userID
        })
        if(isDeleted)
        {
          dispatch(DELETE_USER(props.userID));
        }
       
        closeTrigger();
       
       
    }

    const deleteUser = async() =>  toast.promise(
      deleteAPI(),
      {
        loading:"Deleting the account, Please wait....",
        success:"Account has been deleted",
        error:"An error occured"
      }
      
    );

    return (
        <>
            <Button className="btn btn-white border" onClick={openTrigger}><FaTrashAlt className="text-dark" /></Button>

            <Modal show={open} onHide={closeTrigger}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you'd like to delete <b>{props.user}</b> ?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={closeTrigger}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteUser}>
           <FaCheckCircle /> Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}