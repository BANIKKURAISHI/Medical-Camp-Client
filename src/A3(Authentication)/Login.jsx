import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';
import Navbar from "../A2(Share)/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "./Google";
import { useEffect, useState } from 'react';
import useAuth from '../A4(Hooks)/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from "react-hook-form";

const Login = () => {
  const {logIn}=useAuth()
  const [disable,setDisable]=useState()
 const navigate=useNavigate()
 const location=useLocation()
 const from =location?.state?.form?.pathname || '/'
 useEffect(()=>{
  loadCaptchaEnginge(6)
 },[])

 const {
  register,

  handleSubmit,
  formState: { errors },
} = useForm();
  const onSubmit=(data)=>{
   
    logIn(data.email,data.password)
    .then(result=>{
      console.log(result)
      toast("log in successful !")
      navigate(from,{replace:true})
    })
    .catch(error=>{
      const errorCode=error.code
      toast (errorCode)
    })
  }

  const valid=(e)=>{

 const value= e.preventDefault()
 if(validateCaptcha(value)){
  setDisable(false)
 }
  }
  return (
    <div>
      <Navbar></Navbar>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex text-green-500 items-center mb-6 text-4xl font-semibold "
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://i.ibb.co/89jk5tJ/pngtree-medical-logo-vector-png-image-6713322.png"
              alt="logo"
            />
            HEALTH{" "}
            <span className="text-red-500 text-4xl ml-2">
              P <span className="text-red-500 text-2xl mt-3 -ml-3">LUS</span>{" "}
            </span>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.email && (
                    <span className="text-red-400">Email is required</span>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                  {...register("password", { required: true })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {
                    errors.password&&(
                      <span className="text-red-400">Password is required</span>
                    )
                  }
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    </div>
                    </div>
         <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={valid} type="password"  name="captcha" placeholder="type the text above" className="input input-bordered"  />
          {/* required */}
        </div>
                    
                <button
                 disabled={disable}
                  type="button"
                  className="text-white  mt-5  text-2xl w-full  bg-[#1da1f2] focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg  py-2 inline-flex items-center me-2 mb-3 "
                >
                 <span className="mx-[90px] md:mx-36 lg:mx-36">Sign in </span>   
                
                </button>
              </form>
              <div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-px my-8 bg-blue-400 border-0 dark:bg-gray-700"/>
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
</div>
              <div className="text-center">
                <Google></Google>
              </div>
              <p className="text-xl text-center font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/singUp"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
