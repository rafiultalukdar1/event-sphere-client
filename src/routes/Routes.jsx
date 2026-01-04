import { createBrowserRouter } from "react-router";
import Root from "../components/layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "../context/PrivetRoute";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import EventDetails from "../pages/EventDetails/EventDetails";
import JoinedEvents from "../pages/JoinedEvents/JoinedEvents";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import ManageEventsUpdate from "../pages/ManageEvents/ManageEventsUpdate";
import ErrorApps from "../pages/ErrorApps/ErrorApps";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import DashboardLayouts from "../components/layouts/DashboardLayouts";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/upcoming-events',
                Component: UpcomingEvents,
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/event-details/:id',
                loader: ({params}) => fetch(`https://tenth-assignment-server-tan.vercel.app/events/${params.id}`),
                element: <PrivetRoute><EventDetails></EventDetails></PrivetRoute>,
            },
            {
                path: '*',
                Component: ErrorApps,
            },
            {
                path: 'about-us',
                Component: AboutUs,
            },
            {
                path: 'contact',
                Component: Contact,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayouts></DashboardLayouts></PrivetRoute>,
        children: [
            {
                path: 'create-event',
                element: <CreateEvent></CreateEvent>,
            },
            {
                path: 'manage-events',
                element: <ManageEvents></ManageEvents>,
            },
            {
                path: 'manage-events-update/:id',
                loader: ({ params }) => fetch(`https://tenth-assignment-server-tan.vercel.app/events/${params.id}`),
                element: <PrivetRoute><ManageEventsUpdate></ManageEventsUpdate></PrivetRoute>
            },
            {
                path: 'joined-events',
                element: <JoinedEvents></JoinedEvents>,
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    }
]);