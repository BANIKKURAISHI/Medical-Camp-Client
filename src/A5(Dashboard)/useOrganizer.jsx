import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import useAuth from "../A4(Hooks)/useAuth";


const useOrganizer = () => {
  const axiosSecure=useAxiosSecure()
  const {user,loading}=useAuth()

  const {data :userPost=[],refetch}=useQuery({
    queryKey:[user?.email,'user'],
    enabled: !loading,
    queryFn:async()=>{
      const res=  await axiosSecure.get(`/organizer/user/${user?.email}`)
      return res.data
    
    }
  })
 return [userPost,refetch]
};

export default useOrganizer;



