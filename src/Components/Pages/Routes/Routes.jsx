import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Home/Main";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import ContactUs from "../ContactUs/ContactUs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Dashboard/Cart";
import AllUsers from "../Dashboard/AllUsers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'orders/:category',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);