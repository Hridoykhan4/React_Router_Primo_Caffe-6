import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/coffees',
            element: <Coffees></Coffees>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
    ]
  },
]);
