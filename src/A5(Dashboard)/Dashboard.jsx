import { Outlet } from "react-router-dom";
import Link from "./Link";


const Dashboard = () => {
  return (
    <div className="min-h-screen mb-5 w-11/12">
      <h1 className="text-4xl text-green-400 text-center ">Dashboard</h1>
      <div className="flex flex-row max-w-7xl mx-auto min-h-screen">
        <div className="w-1/4 bg-fuchsia-400">
          <div className="text-3xl text-purple-500 my-2 ml-24">
            Dashboard Menu
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
