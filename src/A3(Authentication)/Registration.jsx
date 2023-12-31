import { useForm } from "react-hook-form";
import Navbar from "../A2(Share)/Navbar";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../A4(Hooks)/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useAxiosPublic from "../A4(Hooks)/useAxiosPublic";
import { Helmet } from "react-helmet-async";
const Registration = () => {
    const axiosPublic=useAxiosPublic()
    const {createUser,updateProfileButton}=useAuth()
   const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
const onSubmit=(data)=>{
 
    createUser(data.email,data.password)
    .then(result=>{
       
            toast("Registration is successful !",result)
            
      
        updateProfileButton(data.name,data.photo)
        .then(result=>{
            
            const userInfo={
                name:data.name ,
                email:data.email,
                photo:data.photo,
                post:data.postName,
                
            }
            console.log(userInfo)
            axiosPublic.post('/user',userInfo)
            .then(res=>{
                
                if(res.data.insertedId){
                  toast("Update in successful !",result)
                  reset()
                }
              })
             
        })

        
            navigate('/')
      
        
        
        
        
    })
    .catch(error=>{
        const errorCode=error.code
        toast(errorCode)  
    })
    reset()
}
    
    return (
        <div>
           <Helmet>
        <title>Medical-Camp | Register </title>
        </Helmet>
            <Navbar></Navbar>
                  <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://i.ibb.co/89jk5tJ/pngtree-medical-logo-vector-png-image-6713322.png" alt="logo"/>
        <h1 className="text-4xl text-green-500">HEALTH</h1>   <span className="text-red-500 text-4xl ml-2">P <span className="text-red-500 text-2xl mt-3 -ml-3">LUS</span> </span> 
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create An Account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input {...register("name", { required: true })} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your name" required=""/>
                     {
                        errors.name && (
                            <span className="text-red-400">Name is required</span>
                        )
                     }
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      {
                        errors.email && (
                            <span className="text-red-400">Name is required</span>
                        )
                     }
                  </div>

                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input {...register("password", {required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern:/(?=.*[!@#$%&*()])(?=.*[0-9](?=.*[a-z]))/})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    Password must be 6 digit{" "}
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400">
                    Password must be less than 10 digit{" "}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                   Password must be One Capital letter one small letter one number and a special characters
                  </span>
                )}
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                      <input type="url" {...register("photo", { required: true })} name="photo" id="photo" placeholder="Enter your photo url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      {
                        errors.photo && (
                            <span className="text-red-400">Name is required</span>
                        )
                     }
                  </div>
                  <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Role
                  </label>
                  <select
                    required  {...register("postName",{required: true})} 
                    id="postName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled>Choose a Role</option>
                    <option value="Participants">Participants</option>
                    <option value="Healthcare Professionals">Healthcare Professionals</option>
                    <option value="Organizers">Organizers</option>
                  
                   
                  </select>
                  {errors.postName && (
                    <span className="text-red-400">
                    Role is required
                    </span>
                  )}
                </div>
               
                  <button
                 
                  className="text-white  mt-5  text-2xl w-full  bg-[#1da1f2] focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg  py-2 inline-flex items-center me-2 mb-3 "
                >
                 <span className="mx-[90px] md:mx-36 lg:mx-36">Sign Up </span>   
                
                </button>
                  
              </form>
              <p className="text-xl text-center font-light text-gray-500 dark:text-gray-400">
                     Have an account ? <Link to='/login' className="font-medium text-primary-600 hover:underline ">Login</Link>
                  </p>
          </div>
      </div>
  </div>
</section> 
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;