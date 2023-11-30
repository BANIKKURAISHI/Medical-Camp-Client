import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


const useParticipant = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const email=user?.email
   
    const {data:participant=[],refetch}=useQuery({
        queryKey:['participant',email],
        
        queryFn:async()=>{
            const res=await axiosSecure.get(`/organizer/user/${email}`)
            return res.data
        }
     })
    return [participant,refetch]
    }


export default useParticipant;