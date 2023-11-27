import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import useAuth from "../A4(Hooks)/useAuth";


const Nav = () => {
    const {user,logOut}=useAuth()
  const nav=  <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Available-Camps"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      }
    >
     Available Camps
    </NavLink>
    <NavLink
      to="/dashboard"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      }
    >
     DashBoard
    </NavLink>
    <NavLink
      to="/contactUs"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      }
    >
    Contact Us
    </NavLink>

    {
      user? " ":<>
      <NavLink
     to="/login"
     className={({ isActive, isPending }) =>
       isPending
         ? "pending"
         : isActive
         ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
         : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
     }
   >
     Login
   </NavLink>
  
      <NavLink
      to="/singUp"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-white bg-gradient-to-br from-red-500 to-red-400  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      }
    >
    
Sing Up

    </NavLink>
    </>
    }
     
 
   
  </>

  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem('theme'):"light")
  const themeButton =(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme =localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)

  },[theme])
  
  const [open,setOpen]=useState(false)
  
  const logOutButton=()=>{
    logOut()
    .then(()=>toast('Logout success full'))
    .catch(error=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    toast(errorCode ,errorMessage )
    })
  }
 
    return (
        <div className="max-w-8xl mx-auto mt-2    ">
            <div className="navbar flex flex-col rounded-t-lg bg-gradient-to-r from-blue-400 to-red-500 p-10 md:flex-row ">
            <div className="navbar-start  flex flex-col md:flex-row ">
            <div onClick={()=>setOpen(!open)} className="dropdown mb-10 md:hidden lg:hidden">
            <label tabIndex={0} className="btn  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-1 z-[1] p-2 -mx-16 bg-base-100 rounded-box w-52 ">
            {open&& <div> <div className="flex flex-col p-2 bg-sky-300">
            {nav}
            </div> </div>}
            </ul>
            </div>
            <div className="flex flex-col md:flex-col -mx-6  lg:flex-row">
            <img src="https://i.ibb.co/R26cnWP/on-dark-background.jpg" className="h-20 w-20 rounded-full" alt="" />
            <h1 className=" normal-case text-4xl my-4 ml-3 font-bold text-white md:-my-1 lg:my-4">AB</h1>
            </div>
          
            </div>
           
            <div className="navbar-center hidden md:flex text-end lg:text-center ">
            <ul className="menu menu-horizontal px-1 my-5 ml-5 md:ml-10 ">
            
          {nav}
            </ul>
            </div>
              


        
            

            
             
             {user?
             <div onClick={()=>setOpen(!open)} className="dropdown dropdown-end ml-20 my-1 rounded-xl ">
             <label tabIndex={0} className="btn btn-circle avatar -mx-16 lg:mx-20">
             <div className="w-10  rounded-full">
             
             </div>
             </label>
             <ul tabIndex={0} className="menu  menu-sm -mx-16 dropdown-content mt-3 z-[1] p-2  bg-inherit rounded-box w-52 md:mx-0 lg:mx-0">
             {open && <div className="-my-[124px] p-1 -mx-10 rounded-lg bg-gradient-to-r from-blue-400 to-red-500 text-white md:  lg:-mx-2 "><li>
             
             <img className="rounded-full w-16 h-16 my-1  mx-24  lg:-my-1" src={user.photoURL} />
             <h1 className="mx-8">{user.displayName}</h1>
             <h1 className="mx-6 -my-1 text-xs">{user.email}</h1>
             <button className="mx-20 w-1/3 bg-gradient-to-r from-green-400 to-blue-500  p-2  text-center  text-white rounded-md text-red text-xl font-medium lg:mx-24 " onClick={logOutButton}>Logout</button>
             </li>
             </div>}
             
             </ul>
             </div>:
             <div className="ml-20 my-6">
             <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ?
              "bg-rose-700   text-white text-center rounded-md text-red text-xl font-medium p-3 ml-28 my-3 ":"text-center text-xl font-medium  text-white bg-red-600  rounded-md p-3 mr-2 my-3"}>Login</NavLink>
             </div>
             }

     <label className="swap swap-rotate  text-white ml-1   md:ml-2 lg:ml-8">
     <input 
     onChange={themeButton}
     checked={theme==="light"?false:true}
     type="checkbox" />
   
     <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
     <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
     </label> 
     </div>
     </div>


);
};

export default Nav; 