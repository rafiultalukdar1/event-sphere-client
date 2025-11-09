import { createBrowserRouter } from "react-router";
import Root from "../components/layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "../context/PrivetRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/upcoming-events',
                element: <h2 className='text-5xl font-bold py-10 text-center'>Upcoming Events</h2>
            },
            {
                path: '/create-event',
                element: <PrivetRoute><h2 className='text-5xl font-bold py-10 text-center'>Create Event</h2></PrivetRoute>
            },
            {
                path: '/manage-events',
                element: <PrivetRoute><h2 className='text-5xl font-bold py-10 text-center'>Manage Events</h2></PrivetRoute>
            },
            {
                path: '/joined-events',
                element: <PrivetRoute><h2 className='text-5xl font-bold py-10 text-center'>Joined Events</h2></PrivetRoute>
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }
]);