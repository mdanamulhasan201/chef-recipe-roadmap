import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../layout/ChefDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chef from "../pages/Chef/Chef/Chef";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
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
                    // loader: ({params}) => fetch (`http://localhost:5000/chefData/${params.id}`)
                    
            }
        ]
    }
])

export default router;
