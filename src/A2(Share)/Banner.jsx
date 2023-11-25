import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from 'swiper/modules';


const Banner = () => {
  
    return (
        <div className="max-w-7xl mx-auto">
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/0M4mgMR/358586-3-6508a916c4c0f00f38569ff593a45880bf62ad47-medium.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/Ld1Cqn7/ad1bd786a4516e9d7b6f01d85fe1fd95.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/yV1mrgh/JUST-Medical-Camp-2023-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/2FpTh2W/compressed-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/60HHDpS/health-support.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co/k3WFCKZ/217a33ec71112c4da547a62a6f16567c.jpg" alt="" /></SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
         
          <span ></span>
        </div>
      </Swiper> 
        </div>
    );
};

export default Banner;