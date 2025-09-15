import React from "react";


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="mt-10">
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
        <SwiperSlide><HeroContent></HeroContent></SwiperSlide>
      </Swiper>
    </div>
    
  );
}
