import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";


const useCamp = () => {
   const axiosPublic=useAxiosPublic()
   
   const {data:camp=[]}=useQuery({
    queryKey:['manage-camps'],
    queryFn:async()=>{
        const res=await axiosPublic.get('/manage-camps')
        return res.data
    }
 })
return [camp]
}

export default useCamp;