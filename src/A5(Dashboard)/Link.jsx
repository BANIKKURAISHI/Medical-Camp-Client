import { NavLink,} from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdHome, MdManageAccounts, MdPeople } from "react-icons/md";
import useOrganizer from './useOrganizer';
import useAdmin from './../A4(Hooks)/useAdmin';
 
const Link = () => {
  const [userPost]=useOrganizer()
  const  [isAdmin]=useAdmin()
  return (
    <div className="flex flex-col mx-5 my-5">
     { userPost.post==="Organizers"?  <NavLink
        to="/dashboard/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      
      >
       <span className="flex flex-row text-xl text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:""}
      { userPost.post==="Healthcare Professionals"?<NavLink
        to="/dashboard/Healthcare-Professionals"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      
      >
       <span className="flex flex-row text-xl text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:''}
      { userPost.post==="Participants"? <NavLink
        to="/dashboard/Participants"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      
      >
       <span className="flex flex-row text-xl text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:  " "}
     
     
     
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
     <span className="flex flex-row text-xl text-center"> <MdManageAccounts  className="text-3xl my-0" />REGISTERED-CAMPS </span>
      </NavLink>
      <NavLink
        to="/dashboard/paidCamp"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center"> <MdManageAccounts  className="text-3xl my-0" />MANAGE REGISTERED CAMPS </span>
      </NavLink>
     {isAdmin&&  <NavLink
        to="/dashboard/allUsers"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center"> <MdPeople className="text-3xl mr-4 my-0" /> User </span>
      </NavLink>}
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        }
      >
     <span className="flex flex-row text-xl text-center"> <MdHome  className="text-3xl mr-4 my-0" /> Home </span>
      </NavLink>
    </div>
  );
};

export default Link;
