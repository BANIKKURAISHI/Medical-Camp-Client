import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-w-7xl mx-auto">
           

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="https://i.ibb.co/rc135dN/44-incredible-404-error-pages-3x-1560x760.png" alt="product image" />
    </a>
   
     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <Link to='/'><button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">Go to Home</button></Link>
        </div>
    </div>

 
       
    );
};

export default Error;