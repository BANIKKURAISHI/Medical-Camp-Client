
import usePaid from "../A4(Hooks)/usePaid";
import { Link } from "react-router-dom";


const PaidCamp = () => {
    const [paid]=usePaid()
    
   
    return (
        <div className="bg-red-400">
        
       <div className="relative bg-orange-400 overflow-x-auto shadow-md sm:rounded-lg m-2">
       <table className="w-full  text-sm text-left rtl:text-right text-white dark:text-gray-400">
         <thead className="text-xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr className=''>
                 <th scope="col" className="p-4">
                   #
                 </th>
                 <th scope="col" className="px-6 py-3">
                  Name
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Date
                 </th>
                 <th scope="col" className="px-6 py-3">
                  Time
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Venue
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Fees
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Payment
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Confirmation
                 </th>
                 <th scope="col" className="px-6 py-3">
                 Action
                 </th> 
                
                 
             </tr>
         </thead>
         <tbody>
            {
            paid?.map((item,index)=><tr className='text-white text-sm' key={item._id} >
             <th className="px-6 py-3">{index+1}</th>
             <th className="px-6 py-3">{item?.campName}</th>
             <th className="px-6 py-3">{item?.campDate}</th>
             <th className="px-6 py-3">{item?.CampTime}</th>
             <th className="px-6 py-3">{item?.venue}</th>
             <th className="px-6 py-3">{item?.price}</th>
             <th className="px-12 py-3">{item?.paymentStatus}</th>
             <th className="px-12 py-3">{item?.status}</th>
             <th>
             <Link to={`/dashboard/review/${item._id}`} ><button className="h-8 text-black px-3 ml-7 shadow-xl bg-white rounded-lg">Review</button></Link>
             </th>
        </tr>)
            }
            
            
            
           
            
             
         </tbody>
     </table>
 </div>
         </div>
    );
};

export default PaidCamp;