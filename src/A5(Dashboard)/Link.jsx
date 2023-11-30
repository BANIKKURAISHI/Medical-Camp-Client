import { NavLink,} from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdHome, MdManageAccounts, MdPeople } from "react-icons/md";
import useOrganizer from './useOrganizer';
import useAdmin from './../A4(Hooks)/useAdmin';
import { FcPaid } from "react-icons/fc";
 
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
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      
      >
       <span className="flex flex-row  text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:""}
      { userPost.post==="Healthcare Professionals"?<NavLink
        to="/dashboard/Healthcare-Professionals"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      
      >
       <span className="flex flex-row  text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:''}
      { userPost.post==="Participants"? <NavLink
        to="/dashboard/Participants"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      
      >
       <span className="flex flex-row  text-center"> <ImProfile  className="text-3xl mr-4 my-1" />Profile</span>
      </NavLink>:  " "}
     
     
     
 { isAdmin && <> <NavLink
        to="/dashboard/add-a-camp"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      >
     <span className="flex flex-row  text-center "> <IoBagAddSharp className="text-3xl mr-4 my-0" /> ADD CAMP</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-camps"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      >
     <span className="flex flex-row  text-center"> <MdManageAccounts  className="text-3xl mr-4 my-0" /> MANAGE-CAMPS </span>
      </NavLink> </>}
      <NavLink
        to="/dashboard/manage-registered-camps"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      >
     <span className="flex flex-row  text-center"> <MdManageAccounts  className="text-3xl my-0" />REGISTERED-CAMPS </span>
      </NavLink>
      <NavLink
        to="/dashboard/paidCamp"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        }
      >
     <span className="flex flex-row  text-center"> <FcPaid className="text-3xl my-0" />MANAGE REGISTERED CAMPS </span>
      </NavLink>
     {isAdmin &&  <NavLink
        to="/dashboard/allUsers"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        }
      >
     <span className="flex flex-row  text-center"> <MdPeople className="text-3xl mr-4 my-0" /> User </span>
      </NavLink>}
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            : "text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        }
      >
     <span className="flex flex-row  text-center"> <MdHome  className="text-3xl mr-4 my-0" /> Home </span>
      </NavLink>
    </div>
  );
};

export default Link;
