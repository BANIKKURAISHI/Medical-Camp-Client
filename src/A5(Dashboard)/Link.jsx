import { NavLink } from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdManageAccounts } from "react-icons/md";
const Link = () => {
  return (
    <div className="flex flex-col mx-5 my-5">
      <NavLink
        to="/dashboard/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      
      >
       <span className="flex flex-row text-xl text-center"> <ImProfile  className="text-3xl mr-4 my-1" /> Profile</span>
      </NavLink>
     
     
     
      <NavLink
        to="/dashboard/add-a-camp"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center "> <IoBagAddSharp className="text-3xl mr-4 my-0" /> ADD CAMP</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-camps"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center"> <MdManageAccounts  className="text-3xl mr-4 my-0" /> MANAGE-CAMPS </span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-registered-camps"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center"> <MdManageAccounts  className="text-3xl mr-4 my-0" /> MANAGE-REGISTERED-CAMPS </span>
      </NavLink>
    </div>
  );
};

export default Link;
