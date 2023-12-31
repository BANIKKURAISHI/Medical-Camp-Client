import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../A2(Share)/Navbar";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const load = useLoaderData();
  console.log(load);
  const { _id,campName, scheduledDate, time, venue, description,image } = load;
  return (
    <div className="max-w-7xl mx-auto">
       <Helmet>
    <title>Medical-Camp | Details </title>
    </Helmet>
      <Navbar></Navbar>
       <img src={image} className="w-full h-[500px]" alt="" />
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {campName}
          </h5>
          <p className="mb-3 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            {description}
          </p>
             <div className="flex flex-row mx-[400px] mb-5">
             <p className="text-xl mr-2">{time}</p>
            <p className=" font-sans text-xl font-semibold mr-2">
              {scheduledDate}
            </p>
            <p className=" font-sans text-xl font-semibold">{venue}</p>
             </div>
           
          </div>
     

        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
         <Link to={`/join/${_id}`}><div className="text-center ">
              <div className="-mt-1 font-sans text-sm font-semibold">
                JOIN CAMP
              </div>
            </div></Link> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;

// campName
// image
// campFees
// scheduledDate
// time
// venue
// location
// services
// healthcare
// attendance
// targetAudience
// description
