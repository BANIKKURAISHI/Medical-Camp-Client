import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MainLayout from "./MainLayout";

const myCreateRoute=createBrowserRouter([
     {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>
     },
     
])




export default myCreateRoute