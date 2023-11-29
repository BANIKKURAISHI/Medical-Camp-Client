import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Team = () => {
    const  axiosSecure=useAxiosSecure()
    const {data :team=[]}=useQuery({
        queryKey:['team'],
        queryFn:async()=>{
        const res=  await axiosSecure.get('team')
        return res.data
        
        }
      })
    return (
        <div className="max-w-7xl mx-auto shadow-xl">
        <div className="mb-4 mt-4 font-bold  text-3xl">Our Medical Team</div>
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {team.map(tea=><SwiperSlide key={tea._id}>
        <div>
        
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <img  className="lg:mx-[400px] w-96 h-96 rounded-full " src={tea.TeamImageURL} alt="" />
        <p className="mb-5 font-bold  text-base text-gray-500 sm:text-lg dark:text-gray-400">{tea.teaback}</p>
        <div className="mb-4  font-bold text-3xl mx-10"> Team Name : {tea.TeamName}</div>
        <div className="mb-4 font-bold  text-3xl">Team Member : {tea.TotalMembers}</div>
        <div className="mb-4 font-bold  text-3xl">Upcoming Camp : {tea.UpcomingCampLocation}</div>

    
    
</div>
        </div>
        </SwiperSlide>)}
      </Swiper>
    </>
  
        
        </div>
    );
};

export default Team;


















// [{
//     "TeamName": "Phoenix Flyers",
//     "TeamLeaderName": "Sarah Thompson",
//     "TotalMembers": 15,
//     "UpcomingCampLocation": "Rocky Mountain Retreat, Colorado",
//     "TeamImageURL": "https://i.ibb.co/g4p1ZKt/doctor-with-healthcare-staff-in-hospital.jpg"
//   },
//   {
//     "TeamName": "Galaxy Explorers",
//     "TeamLeaderName": "Alex Rodriguez",
//     "TotalMembers": 12,
//     "UpcomingCampLocation": "Starlight Meadows, Arizona",
//     "TeamImageURL": "https://i.ibb.co/NrrKr5D/depositphotos-20190657-stock-photo-group-of-professional-medical-team.webp"
//   },
//   {
//     "TeamName": "Wilderness Warriors",
//     "TeamLeaderName": "James Anderson",
//     "TotalMembers": 20,
//     "UpcomingCampLocation": "Pine Ridge Forest, Montana",
//     "TeamImageURL": "https://i.ibb.co/1nnnz4K/medical-groups-c3e6fcadafbd51a5678728a2733104cf.jpg"
//   },
//   {
//     "TeamName": "Coastal Crusaders",
//     "TeamLeaderName": "Emily Foster",
//     "TotalMembers": 18,
//     "UpcomingCampLocation": "Ocean View Haven, California",
//     "TeamImageURL": "https://i.ibb.co/HtM4899/depositphotos-29925665-stock-photo-medical-team.webp"
//   },
//   {
//     "TeamName": "Summit Seekers",
//     "TeamLeaderName": "Ryan Parker",
//     "TotalMembers": 10,
//     "UpcomingCampLocation": "Snowpeak Lodge, Alaska",
//     "TeamImageURL": "https://i.ibb.co/dMjSTHc/istockphoto-1421919753-612x612.jpg"
//   },
//   {
//     "TeamName": "Nature Navigators",
//     "TeamLeaderName": "Olivia Davis",
//     "TotalMembers": 25,
//     "UpcomingCampLocation": "Green Valley Preserve, Oregon",
//     "TeamImageURL": "https://i.ibb.co/mTN3q2Y/istockphoto-1152347304-612x612.jpg"
//   }]