import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBestCamp = () => {
    const axiosPublic=useAxiosPublic()
   
    const {data:best=[],refetch}=useQuery({
     queryKey:['best-camps'],
     queryFn:async()=>{
         const res=await axiosPublic.get('/bestCamps')
         return res.data
     }
  })
 return [best,refetch]
 
 
};

export default useBestCamp;