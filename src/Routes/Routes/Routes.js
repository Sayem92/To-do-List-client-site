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

export const router = createBrowserRouter([
    { 
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/updateTask/:id',
                loader: ({params})=> fetch(`http://localhost:5000/myTask/${params.id}`),
                element: <UpdateTask></UpdateTask>
            },
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`http://localhost:5000/myTask/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
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