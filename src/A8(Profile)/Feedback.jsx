import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdStarRate } from 'react-icons/md';



const Feedback = () => {
    const axiosSecure=useAxiosSecure()
    const {data:review=[]}=useQuery({
        queryKey:['review'],
        queryFn:async()=>{
            const res=await  axiosSecure.get('/feedback-and-rating')
            console.log(res.data)
            return res.data
        }
     })
    return (
        <div className="max-w-7xl mx-auto shadow-xl">
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {review.map(feed=><SwiperSlide key={feed._id}>
        <div>
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <img  className="lg:mx-[530px] w-40 h-40 rounded-full " src={feed.image} alt="" />
        <p className="mb-5 mt-4  text-base text-gray-500 sm:text-lg dark:text-gray-400">{feed.feedback}</p>
       
        <div className="flex flex-row lg:mx-[530px]">
     <MdStarRate className="text-4xl text-amber-400 " /><MdStarRate className="text-4xl text-amber-400 "  /><MdStarRate className="text-4xl text-amber-400 "  />
     <p className="ms-2 text-4xl font-bold text-gray-900 dark:text-white">{feed.rating}</p>
     </div>


    
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <div className="mb-4  mt-4 text-3xl mx-10">{feed.campName}</div>
    <div className="mb-4 mt-4  text-3xl">{feed.Date}</div>
        
    </div>
</div>
        </div>
        </SwiperSlide>)}
      </Swiper>
    </>
  
        
        </div>


    
   

         
        
    );
};

export default Feedback;





// Filter articles by views or publisher






