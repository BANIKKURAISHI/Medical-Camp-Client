import { useState } from "react";
import { NavLink, } from "react-router-dom";
import useAuth from "../A4(Hooks)/useAuth";

const Navbar = () => {
 const [open,setOpen]=useState(false)
 const {user,logOut}=useAuth() 
 console.log(user?.displayName
  ) 
  console.log(user?.photoURL

    )


 const logOutButton=()=>{
  logOut()
  .then((result)=>{
   console.log(result)
  })
  .catch(error=>{
    console.log(error)
  })
  
}
   // 
  const link =<>
         
    <NavLink to='/' className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center  ":"block  bg-white shadow-xl  h-8w-32 text-center      text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} > Home</NavLink>
    <NavLink to='/Available-Camps'className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center   ": "block  bg-white shadow-xl  h-8w-32 text-center    text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Available Camps</NavLink>
   {!user &&<> <NavLink to='/login' className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center   ": "block  bg-white shadow-xl  h-8 w-32 text-center   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} >Login</NavLink>
    <NavLink to='/singUp' className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center   ": "block  bg-white shadow-xl  h-8 w-32 text-center   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} >Sing Up</NavLink>
   </> }
    <NavLink to='/contactUs' className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center   ":"block  bg-white shadow-xl  h-8 w-32 text-center   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} >Contact Us</NavLink>
    <NavLink to='/dashboard' className={({ isActive, isPending }) =>isPending? "pending": isActive? "text-red-500 bg-white shadow-xl  h-8 w-32 text-center   ": "block  bg-white shadow-xl  h-8 w-32 text-center   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} >Dashboard</NavLink>
    
  </>   




  return (
    <div className="max-w-7xl mx-auto h-32 shadow-xl">
      

<nav className="bg-white shadow-2xl mt-2  border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.ibb.co/89jk5tJ/pngtree-medical-logo-vector-png-image-6713322.png" className="-mt-52 md:mt-0  lg:mt-0  h-8" alt="Flow Logo" />
        <span className="-mt-52 md:mt-0  lg:mt-0  self-center text-blue-500 text-3xl font-semibold whitespace-nowrap dark:text-white">
        HEALTH
            <span className="text-red-500 text-3xl ml-2">
              PLUS</span>
            </span>
        
    </a>
    <button onClick={()=>setOpen(!open)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 mb-52  text-bottom text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        <div className="mt-60 md:mt-24">
        {open &&  <ul className="flex flex-col md:flex-row -ml-[320px]" >
          {link}
        </ul>}

        </div>
      
    </button>



    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {link}
      </ul>
    </div>

 {!user?" ": <div className="">
 <div className=" relative">
 <img onClick={()=>setOpen(!open)} src={user?.photoURL}alt="logo" className="w-10 h-10 cursor-pointer object-cover border-gray-400 rounded-full" />
 {open && (<div className="bg-white shadow-lg w-20 h-10 items-center text-center absolute -left-6 my-3">
 <ul className="">
  <li>
  <button onClick={logOutButton}  className=" p-2 hover:bg-slate-300">Log out</button>
  </li>
 </ul>
 </div>)}
 </div>
</div>}

</div>
</nav>

{/* dropdown */}

















    </div>
  );
};

export default Navbar;