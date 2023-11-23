import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Login from "../A3(Authentication)/Login";
import Registration from "../A3(Authentication)/Registration";

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
    }
])




export default myCreateRoute