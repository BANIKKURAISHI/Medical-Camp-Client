import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";



const useBestCamp = () => {
    const axiosSecure=useAxiosSecure()
    
   
    const {data:best=[],refetch}=useQuery({
     queryKey:['best-camps'],
     
     queryFn:async()=>{
         const res=await axiosSecure.get('/bestCamps')
         return res?.data
     }
  })
 return [best,refetch]
 
 
};

export default useBestCamp;