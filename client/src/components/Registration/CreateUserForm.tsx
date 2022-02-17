import {useState } from "react";
import Axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "../../helpers/form/useForm";
import UserList from "../Users/UsersList";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "../../app/features/UserManagement/UserMgmtSlice";
import {FaUserCircle} from 'react-icons/fa';
export default function CreateUserForm() {
  const dispatch = useDispatch();

    const [loading,setLoading] = useState(false);

  

  const initialStateInput:any = []

  const {onChange,onSubmit,values} = useForm(
    addUser,
      initialStateInput
  );


   async function addUser()
  {
     const isCreated = await Axios.post('http://localhost:3001/create-users',values);
     setLoading(true);

     if(isCreated)
     {
      setLoading(false);
        dispatch(CREATE_USER(values));
    } else {
      setLoading(false);
         console.log("No user was created");
     }
     console.log(values);
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 4 }} className="mt-4">
            <Card>
              <Card.Header className="form-header">
                <h3><FaUserCircle /> Create Account</h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group>
                    <Form.Control id="Name" name="Name" onChange={onChange} required placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mt-4">
                    <Form.Control name="Email" id="Email" onChange={onChange} required  placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mt-4">
                    <Form.Control
                    onChange={onChange} required
                      type="password"
                      id="Password"
                      name="Password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <Form.Group className="mt-4 text-end">
                    {loading ? "Processing....." : ""}
                    <Button type="submit"  className="btn btn-success">Create account</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={{ span: 8 }} className="mt-4">
            <UserList />
            </Col>
        </Row>
      </Container>
    </>
  );
}
