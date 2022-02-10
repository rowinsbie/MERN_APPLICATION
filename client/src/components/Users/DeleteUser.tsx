import axios from "axios";
import React, {useState} from "react"
import { Button,Modal } from "react-bootstrap"
export default function DeleteUser(props:any)
{
    const [open,setOpen] = useState(false);
    const openTrigger = () => setOpen(true);
    const closeTrigger = () => setOpen(false);
    async function deleteUser()
    {
        try
        {
          await axios.post(`http://localhost:3001/delete-user`,{
            userID:props.userID
        })
       alert("User has been deleted");
        closeTrigger();
        } catch(e)
        {
          console.log(e);
        }
       
       
    }

    return (
        <>
            <Button variant="danger" onClick={openTrigger}>Delete</Button>

            <Modal show={open} onHide={closeTrigger}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you'd like to delete <b>{props.user}</b> {props.userID}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeTrigger}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteUser}>
           Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}