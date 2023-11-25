import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Login from "../A3(Authentication)/Login";
import Registration from "../A3(Authentication)/Registration";
import Dashboard from "../A5(Dashboard)/Dashboard";
import Profile from "../A5(Dashboard)/Profile";
import AddCamp from "../A5(Dashboard)/AddCamp";
import ManageCamps from "../A5(Dashboard)/ManageCamps";

const myCreateRoute=createBrowserRouter([
     {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>,
        children:[{
            path:'/',
            element:<Home></Home>
        }]
     },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/singUp',
        element:<Registration></Registration>
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
             path:'profile',
             element:<Profile></Profile>
            },
            {
                path:'add-a-camp',
                element:<AddCamp></AddCamp>
            },
            {
                path:'manage-camps',
                element:<ManageCamps></ManageCamps>
            }
        ]
    }
])




export default myCreateRoute