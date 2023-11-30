import { Link } from "react-router-dom";
import useBestCamp from "../A4(Hooks)/useBestCamp";
import { HiCurrencyDollar } from "react-icons/hi2";
import SocialPlatform from "../A8(Profile)/SocialPlatform";


const BestCamps = () => {
    const [best]=useBestCamp()


    return (
    <div className="max-w-7xl mx-auto flex flex-row">
        
     <div className="w-3/4 max-w-7xl mx-auto grid my-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       
         {
            best?.map(data=>
                <div key={data.key} className="lg:w-[420px] h-[650px] text-justify bg-blue-400 text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-72" src={data?.image} alt="" />
                    </a>
                    <div className="mx-5 ">
                        <h1 className="text-3xl font-bold ">{data?.campName}</h1>
                        <p>{data?.services}</p>
                       
                    </div>
                    
                    <div className="flex flex-col mx-5 flex-grow" >
                    <div>
                       <p className="text-xl font-semibold">Attendance:{data?.attendance}</p>
                       <p className="text-xl font-semibold">Target Audience :{data?.targetAudience}</p>
                    </div>
                   
                      <div className="flex flex-col text-justify flex-grow">
                       
                        <h1 className="text-xl font-semibold">Time: {data?.time}</h1>
                        <h1 className="text-xl font-semibold">Date :{data?.scheduledDate}</h1>
                        <div>
                        <h1 className="text-xl font-semibold">Venue :{data?.venue}</h1>
                       
                       </div> 
                        
                    </div>
                    </div>
                    <h1 className="text-2xl font-semibold mx-5 flex flex-row ">Camp Fee :{data?.campFees} <HiCurrencyDollar className="text-3xl my-1" /></h1>
                   
                    <div className="flex-grow">
                   <Link to={`/details/${data?._id}`}> <button className="relative  inline-flex mx-28  justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         See More Details </span>
                        </button></Link>
                    </div>
                </div>
                )
         }  

         <div className="">
         <Link to="/Available-Camps"><button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">See All Camps</button></Link>   
            </div> 
        </div> 
        <div className="w-1/4 lg:mr-10">
        <SocialPlatform></SocialPlatform>   
            </div>  
       
    </div>
    )
};

export default BestCamps;