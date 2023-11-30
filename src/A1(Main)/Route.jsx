import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Login from "../A3(Authentication)/Login";
import Registration from "../A3(Authentication)/Registration";
import Dashboard from "../A5(Dashboard)/Dashboard";
import Profile from "../A8(Profile)/Profile";
import AddCamp from "../A5(Dashboard)/AddCamp";
import ManageCamps from "../A5(Dashboard)/ManageCamps";
import Update from "../A5(Dashboard)/Update";
import AvailableCamps from "../A6(Page)/AvailableCamps";
import Details from "../A6(Page)/Details";
import JoinForm from "../A6(Page)/JoinForm";
import RegistrationCamp from "../A6(Page)/RegistrationCamp";
import AllUsers from "../A5(Dashboard)/AllUsers";
import Payment from "../A7(Payment)/Payment";
import Contact from "../A6(Page)/Contact";
import ProfessionalsProfile from "../A8(Profile)/ProfessionalsProfile";
import ParticipantProfile from "../A8(Profile)/ParticipantProfile";
import PaidCamp from "../A5(Dashboard)/PaidCamp";
import ReviewForm from "../A5(Dashboard)/ReviewForm";

import UpdatePage from "../A8(Profile)/UpdatePage";
import Privet from "../A3(Authentication)/Privet";
import AdminRoute from "../A3(Authentication)/AdminRoute";
import UpdateProfileOrganize from "../A8(Profile)/UpdateProfileOrganize";
import ProfessionalUpdate from "../A8(Profile)/ProfessionalUpdate";





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
        loader:({params})=>fetch(`https://medical-camp-server-nu.vercel.app/manage-camps/${params.id}`)
     },
     {
        path:'/join/:id',
        element:<JoinForm></JoinForm>,
        loader:({params})=>fetch(`https://medical-camp-server-nu.vercel.app/manage-camps/${params.id}`)
        
     },
    
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/contactUs',
        element:<Privet><Contact></Contact></Privet>
    },
    {
        path:'/singUp',
        element:<Registration></Registration>
    },
    {
        path:'/dashboard',
        element:<Privet><Dashboard></Dashboard></Privet>,
        children:[
            {
             path:'profile',
             element:<Profile></Profile>,
           
            },
            {
                path:'add-a-camp',
                element:<AdminRoute><AddCamp></AddCamp></AdminRoute>
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
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'Healthcare-Professionals',
                element:<ProfessionalsProfile></ProfessionalsProfile>
            },
            {
                path:'Participants',
                element:<ParticipantProfile></ParticipantProfile>
            },
            {
                path:'ProfessionalUpdate/:id',
                element:<ProfessionalUpdate></ProfessionalUpdate>
            },
            {
                path:'paidCamp',
                element:<PaidCamp></PaidCamp>
            },
            {
                path:'UpdatePage/:id',
                element:<UpdatePage></UpdatePage>
               
            },
            {
                path:'UpdateProfileOrganize/:id',
                element:<UpdateProfileOrganize></UpdateProfileOrganize>
               
            },
            
            {
                path:'review/:id',
                element:<ReviewForm></ReviewForm>,
                loader:({params})=>fetch(`https://medical-camp-server-nu.vercel.app/campRegistration/${params.id}`)

            },
           {
            path:'payment/:id' ,
            element:<Payment></Payment>,
            loader:({params})=>fetch(`https://medical-camp-server-nu.vercel.app/registration/${params.id}`)

           },
            {
                path:'update-camp/:id',
                element:<AdminRoute><Update></Update></AdminRoute>,
                loader:({params})=>fetch(`https://medical-camp-server-nu.vercel.app/manage-camps/${params.id}`)
            },

        ]
    }
])




export default myCreateRoute