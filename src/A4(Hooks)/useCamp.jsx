import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";


const useCamp = () => {
   const axiosSecure=useAxiosSecure()
   
   const {data:camp=[],refetch}=useQuery({
    queryKey:['manage-camps'],
    queryFn:async()=>{
        const res=await axiosSecure.get('/manage-camps')
        return res.data
    }
 })
return [camp,refetch]
}

export default useCamp;