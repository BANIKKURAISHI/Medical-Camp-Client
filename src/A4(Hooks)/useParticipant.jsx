import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosPublic from "./useAxiosPublic"


const useParticipant = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const email=user?.email
   
    const {data:participant=[],refetch}=useQuery({
        queryKey:['participant',email],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/organizer/user/${email}`)
            return res.data
        }
     })
    return [participant,refetch]
    }


export default useParticipant;