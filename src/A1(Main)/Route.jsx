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
import Update from "../A5(Dashboard)/Update";
import AvailableCamps from "../A6(Page)/AvailableCamps";
import Details from "../A6(Page)/Details";
import JoinForm from "../A6(Page)/JoinForm";
import RegistrationCamp from "../A6(Page)/RegistrationCamp";
import AllUsers from "../A5(Dashboard)/AllUsers";


const myCreateRoute=createBrowserRouter([
     {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>,
        children:[{
            path:'/',
            element:<Home></Home>
        },
       
    ]
     },
     {
        path:'/Available-Camps',
        element:<AvailableCamps></AvailableCamps>

     },
     {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/manage-camps/${params.id}`)
     },
     {
        path:'/join/:id',
        element:<JoinForm></JoinForm>,
        loader:({params})=>fetch(`http://localhost:5000/manage-camps/${params.id}`)
        
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
            },
            {
                path:'manage-registered-camps',
                element:<RegistrationCamp></RegistrationCamp>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'update-camp/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/manage-camps/${params.id}`)
            },

        ]
    }
])




export default myCreateRoute