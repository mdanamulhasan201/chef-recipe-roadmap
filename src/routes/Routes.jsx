import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../layout/ChefDetails";
import Chef from "../pages/Chef/Chef/Chef";
import Login from "../pages/Login/Login";
import Register from "../../../../../Live-session-3(login page auth server)Gias vai/login-page-auth-with-server/src/pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    },
    {
        path: 'chefdetails',
        element: <ChefDetails></ChefDetails>,
        children : [
            {
                path: '/chefdetails',
                element: <Chef></Chef>,
                // loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            },
            {
                path: ':id',
                element: <Chef></Chef>,
                // loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            }
        ]
    }
])

export default router;
