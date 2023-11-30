// import { useState } from "react";
// import { NavLink } from "react-router-dom";


// const Nav = () => {
// const [isOpen,setIsOpen]=useState(false)

// const link=<>
// <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Home</NavLink>
// <NavLink to="/Available-Camps" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Available Camps</NavLink>
// <NavLink to="/contactUs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Contact Us</NavLink>

// <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center " : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 ml-1 mr-4  "}>Log in</NavLink>
// <NavLink to="/singUp" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center " : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 ml-1 mr-4  "}>Sing Up</NavLink>   
// </>
  
//   return (
//     <div>
//       <div className="w-11/12 mx-auto ">
//       <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div>
//     <div onClick={()=>setIsOpen(!isOpen)} className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//        {link}
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex flex-row gap-2">
//     <ul className="menu menu-horizontal px-1">
//       {link}
//     </ul>
//   </div>
//   <div className="navbar-end">
//   <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Dashboard</NavLink>
//   </div>
// </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Nav;