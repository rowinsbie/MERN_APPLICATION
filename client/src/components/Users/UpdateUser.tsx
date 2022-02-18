import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../../app/features/UserManagement/UserMgmtSlice";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "../../helpers/form/useForm";
export default function UpdateUser(props: any) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const openTrigger = () => setOpen(true);
  const closeTrigger = () => setOpen(false);
  const initialState: any = [
   
  ];

  const deleteUser = () =>
    toast.promise(updateAPI(), {
      loading: "Updating, Please wait....",
      success: "Account has been updated",
      error: "An error occured",
    });

  const { onChange, onSubmit, values } = useForm(deleteUser, initialState);

  async function updateAPI() {
    console.log(values);
    // const isUpdated =   await axios.post(`http://localhost:3001/delete-user`,{
    //     userID:props.userID
    // })
    // if(isUpdated)
    // {
    //   dispatch(DELETE_USER(props.userID));
    // }

    closeTrigger();
  }

  return (
    <>
      <Button className="btn btn-success " onClick={openTrigger}>
        <FaEdit />
      </Button>

      <Modal show={open} onHide={closeTrigger}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="Name" name="Name"
                onChange={onChange}
                defaultValue={props.user.Name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control id="Email" name="Email"
                onChange={onChange}
                defaultValue={props.user.Email}
              />
            </Form.Group>
            <Form.Group className="text-end mt-5">
              <Button variant="light" onClick={closeTrigger}>
                Close
              </Button>
              <Button type="submit" variant="success">
                <FaCheckCircle /> Update
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
