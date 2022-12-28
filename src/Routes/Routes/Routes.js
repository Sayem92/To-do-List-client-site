import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../component/AddTask/AddTask";
import CompletedTask from "../../component/CompletedTask/CompletedTask";
import Details from "../../component/Details/Details";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Login from "../../component/Form/Login";
import Register from "../../component/Form/Register";
import Home from "../../component/Home/Home";
import MyTask from "../../component/MyTask/MyTask";
import UpdateTask from "../../component/UpdateTask/UpdateTask";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addTask',
                element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>
            },
            {
                path: '/myTask',
                element: <PrivateRoutes><MyTask></MyTask></PrivateRoutes>
            },
            {
                path: '/updateTask/:id',
                loader: ({ params }) => fetch(`https://to-do-list-server-site.vercel.app/myTask/${params.id}`),
                element: <UpdateTask></UpdateTask>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://to-do-list-server-site.vercel.app/myTask/${params.id}`),
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
            },
            {
                path: '/completedTask',
                element: <PrivateRoutes><CompletedTask></CompletedTask></PrivateRoutes>
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