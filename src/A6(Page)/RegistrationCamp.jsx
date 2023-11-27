
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
                Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                Confirmation Status,
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th> 
               
                
            </tr>
        </thead>
        <tbody>
           {
           registration?.map((item,index)=><tr className='text-white text-sm' key={item._id} >
            <th className="px-6 py-3">{index+1}</th>
            <th className="px-6 py-3">{item?.campName}</th>
            <th className="px-6 py-3">{item?.scheduledDate}</th>
            <th className="px-6 py-3">{item?.time}</th>
            <th className="px-6 py-3">{item?.venue}</th>
            <th className="px-20 py-3">yet to pay</th>
            <th className="px-24 py-3">pending</th>
            
            <th className='flex flex-col ml-10'>
            cancel
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