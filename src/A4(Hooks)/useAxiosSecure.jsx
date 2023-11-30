import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";



const axiosSecure=axios.create(
    {
        baseURL:'https://medical-camp-server-nu.vercel.app/'
    }
)

const useAxiosSecure = () => {
  const{logOut}=useAuth()
  const navigate=useNavigate()

   axiosSecure.interceptors.request.use(function(config){
       const token= localStorage.getItem('access-token')
       console.log('this is access token ',token)
       config.headers.Authorization=`Bearer ${token}`
       return config
   },
   function(error){
       return Promise.reject(error)
     }
   )

   axiosSecure.interceptors.response.use(function(response){
       return response
   },
   async(error)=>{
       const status= error?.response?.status
       console.log('error code in the inceptors error',status)
      if(status(401)||status(401)){
       await logOut()
       navigate('/login')
      }
      return Promise.reject(error);
   }
   )
   
    
    return (
        axiosSecure
    );
};

export default useAxiosSecure;