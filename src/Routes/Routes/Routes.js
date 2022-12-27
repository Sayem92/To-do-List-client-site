import { createBrowserRouter } from "react-router-dom";
import Login from "../../component/Form/Login";
import Register from "../../component/Form/Register";
import Home from "../../component/Home/Home";
import Main from "../../layout/Main";

export const router = createBrowserRouter([
    { 
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    }
])