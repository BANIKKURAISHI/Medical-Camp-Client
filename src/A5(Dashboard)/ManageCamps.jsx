
import { Helmet } from 'react-helmet-async';
import useCamp from '../A4(Hooks)/useCamp';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAxiosSecure from '../A4(Hooks)/useAxiosSecure';
import Swal from 'sweetalert2';
const ManageCamps = () => {
   const [camp,refetch]=useCamp()
   const axiosSecure=useAxiosSecure()
  
   const deleteCamp=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        axiosSecure.delete(`/delete-camp/${id}`)
        .then(res=>{
        if(res.data.deletedCount>0)
         {
           Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success"
         });
         refetch()
        }
         })
 

        //   console.log(id)
        //   axiosSecure.delete(`/menu/${id}`)
        //   .then(res=>{
       
        //    
        //     console.log (res.data)
    //       })
          
      }
      });


   }








    return (
        <div>
         
            <Helmet>
            <title>Medical-Camp | Manage-camp</title>
            </Helmet>
            <h1>This is manage camp</h1>
           

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
                Attendance
                </th>
                <th scope="col" className="px-6 py-3">
                TargetAudience
                </th>
                <th scope="col" className="px-6 py-3">
                Description
                </th> 
                <th scope="col" className="px-6 py-3">
                Services
                </th>
                <th scope="col" className="px-6 py-3">
               Action
                </th>
                
            </tr>
        </thead>
        <tbody>
           {
            camp.map((item,index)=><tr className='text-white text-sm' key={item._id} >
            <th className="px-6 py-3">{index+1}</th>
            <th className="px-6 py-3">{item.campName}</th>
            <th className="px-6 py-3">{item.scheduledDate}</th>
            <th className="px-6 py-3">{item.time}</th>
            <th className="px-6 py-3">{item.venue}</th>
            <th className="px-20 py-3">{item.attendance}</th>
            <th className="px-24 py-3">{item.targetAudience}</th>
            <th className="px-6 py-3">{item.description.slice(0,30)}.....</th>
            <th className="px-6 py-3">{item.services.slice(0,15) }...</th>
            <th className='flex flex-col ml-10'>
            <Link to={`/dashboard/update-camp/${item._id}`}> <button  className='btn ml-1 my-2 text-4xl text-white'><FaEdit/> </button></Link>    
            <button onClick={()=>deleteCamp(item._id)} className='btn my-2 text-4xl text-white'><RiDeleteBin6Line /></button>
            </th>
            
          
           
            </tr>)
           }
           
           
           
          
           
            
        </tbody>
    </table>
</div>

  
        </div>
    );
};

export default ManageCamps;


// campName:data.
// image :data.
// campFees:data.
// scheduledDate:data.
// time:data.
// venue:data.

// services :data.

// attendance:data.
// targetAudience:data.
// description:data.