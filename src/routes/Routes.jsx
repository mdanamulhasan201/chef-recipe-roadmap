import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../layout/ChefDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chef from "../pages/Chef/Chef/Chef";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: "chefDetails",
        element: <ChefDetails></ChefDetails>,
        children: [

            {
                path: ':id',
                element:
                    <PrivateRoute>
                        <Chef></Chef>
                    </PrivateRoute>
            }
        ]
    }
])

export default router;
