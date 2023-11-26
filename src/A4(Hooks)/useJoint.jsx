
import { useQuery } from '@tanstack/react-query';

import useAuth from './useAuth';

import useAxiosPublic from './useAxiosPublic';

const useJoint = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const email=user?.email

    const {data:registration=[],refetch}=useQuery({
     queryKey:['registration',email],
     queryFn:async()=>{
         const res=await axiosPublic.get(`/registration?email=${email}`)
         return res.data
     }
  })
 return [registration,refetch]
 }


export default useJoint;