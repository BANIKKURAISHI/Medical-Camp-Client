import { Outlet } from "react-router-dom";
import Link from "./Link";
import Navbar from "../A2(Share)/Navbar";


const Dashboard = () => {
  return (
    <div className="min-h-screen mb-5 ">
      <Navbar></Navbar>
     
      <div className="flex flex-row max-w-7xl mx-auto min-h-screen">
        <div className="w-1/4 bg-white shadow-2xl">
          <div className="text-3xl text-purple-500 my-2 ml-24">
          
          </div>
          <div>
            <Link></Link>
          </div>
        </div>

        <div className="w-3/4 bg-blue-400 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
