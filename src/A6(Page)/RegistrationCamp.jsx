
import { Link } from "react-router-dom";
import useJoint from "../A4(Hooks)/useJoint";
import CampFee from "./CampFee";
import { GiCancel } from "react-icons/gi";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import Swal from "sweetalert2";
const RegistrationCamp = () => {
    const [registration,refetch]=useJoint()
    const axiosSecure=useAxiosSecure()

    const cancelRegistration=(id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to cancel this Registration!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/registration-cancel/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
                .catch(error=>{
                    if(error){
                        Swal.fire({
                            title: "Error!!",
                            text: "OPS!!!!There are some problem...",
                            icon: "error"
                          });
                    }
                })

            
            }
          });
        }  
    return (
        <div className="bg-red-400">
       <CampFee></CampFee>
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
          <th>
          {item.paymentStatus!=="Paid"?<button onClick={()=>cancelRegistration(item._id)} className='flex flex-col ml-10 py-4'>
             <GiCancel  className="text-4xl text-white"/>
            </button>:"On the way"}
            </th>  
        <th>
         { item.paymentStatus==="Paid"?
          <button disabled  type="button" className="text-white bg-gradient-to-r bg-red-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Payment</button>
         :
         
        <Link to={`/dashboard/payment/${item._id}`}><button  type="button" className="text-white text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Payment</button></Link>
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