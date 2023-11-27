import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure()

   const {data:user=[],refetch}=useQuery({
    queryKey:['organizer-profile'],
    queryFn:async()=>{
        const res=await axiosSecure.get('/organizer-profile')
        return res.data
    }


 
   })

   const makeAdmin=(id)=>{
   console.log(id)
   axiosSecure.patch(`/organizer-profile/admin/${id}`)
    .then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        refetch()
        Swal.fire({
            title: "Success!",
            text: `${res.data.name} is an admin Now.`,
            icon: "success"
          });
    }
    })

   }

   return (
    <div>
       
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className=''>
                    <th scope="col" className="p-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Action
                    </th>
                   
                   
                    
                </tr>
            </thead>
            <tbody>
               {
               user?.map((item,index)=><tr className='text-white text-sm' key={item._id} >
                <th className="px-6 py-3">{index+1}</th>
                <th className="px-6 py-3">{item?.name}</th>
                <th className="px-6 py-3">{item?.email}</th>
                <th className="px-6 py-3">
                    <img className="w-10 h-10 rounded-full" src={item?.photo}alt="" /></th>

                {item.role==='admin'? <th className="text-3xl font-bold">Admin</th>:
                <th className="px-6 py-3">
                <button onClick={()=>makeAdmin(item._id)}  type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Make Admin</button>
                </th>
                 }
                
                <th>
                
                <button   type="button" className="text-white px-10  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2">Remove</button>
                </th>
                
                </tr>)
               }
               
               
               
              
               
                
            </tbody>
        </table>
    </div>
            </div>
   )





};

export default AllUsers;
