import { FcGoogle } from "react-icons/fc";
import useAuth from "../A4(Hooks)/useAuth";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Google = () => {
    const {googleLogin}=useAuth()
    const googleLoginButton=()=>{
        googleLogin()
        .then(result=>{
          toast('Login successful',result)   
        }) 
        .catch(error=>{
            toast(error.code)    
        })
    }
    return (
<div>
<button onClick={googleLoginButton} type="button" className="w-full text-2xl  text-white bg-[#1da1f2]  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
<FcGoogle className="md:ml-10 mr-3 text-2xl"></FcGoogle>
Sign in with Google
</button>       
<ToastContainer />         
 </div>
    );
};

export default Google;