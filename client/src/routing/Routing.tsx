/**
 * Routing List
 * This is where we can register a new route in the app
 */
import { Route,Routes } from "react-router-dom";

// Parent Components 
import CreateUserForm from "../components/Registration/CreateUserForm";

export default function Routing()
{
    return (
        <Routes>
            <Route path="/" element={<CreateUserForm />}></Route>
        </Routes>
    )
}