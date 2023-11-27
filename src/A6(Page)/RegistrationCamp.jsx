
import { Link } from "react-router-dom";
import useJoint from "../A4(Hooks)/useJoint";
import CampFee from "./CampFee";

const RegistrationCamp = () => {
    const [registration]=useJoint()
    
    return (
        <div>
       <CampFee></CampFee>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=''>
                <th scope="col" className="p-4">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                 Camp Name
                </th>
                <th scope="col" className="px-6 py-3">
                Scheduled Date
                </th>
                <th scope="col" className="px-6 py-3">
                 Time
                </th>
                <th scope="col" className="px-6 py-3">
                Venue
                </th>
                <th scope="col" className="px-6 py-3">
                Camp Fee
                </th>
                <th scope="col" className="px-6 py-3">
                Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                Confirmation Status,
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th> 
                <th scope="col" className="px-6 py-3">
                Payment
                </th> 
               
                
            </tr>
        </thead>
        <tbody>
           {
           registration?.map((item,index)=><tr className='text-white text-sm' key={item._id} >
            <th className="px-6 py-3">{index+1}</th>
            <th className="px-6 py-3">{item?.campName}</th>
            <th className="px-6 py-3">{item?.date}</th>
            <th className="px-6 py-3">{item?.time}</th>
            <th className="px-6 py-3">{item?.venue}</th>
            <th className="px-6 py-3">{item?.price}</th>
            <th className="px-12 py-3">{item?.paymentStatus}</th>
            <th className="px-12 py-3">{item?.confirmStatus}</th>
            
            <th className='flex flex-col ml-10 py-4'>
            cancel
            </th>
             <th>
            {item.price>0?
             <Link to={`/dashboard/payment/${item._id}`}><button  type="button" className="text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Payment</button></Link>
              : 
              <button disabled  type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2">Payment</button>
              } 
              </th>
            </tr>)
           }
           
           
           
          
           
            
        </tbody>
    </table>
</div>
        </div>
        
    );
};

export default RegistrationCamp;