import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const usePaid = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const email=user?.email
   
    const {data:paid=[],refetch}=useQuery({
        queryKey:['paid',email],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/paid?email=${email}`)
            return res.data
        }
     })
    return [paid,refetch]
    }


export default usePaid;