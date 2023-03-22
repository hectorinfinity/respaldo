import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
//import required modules
import { Pagination, Autoplay, EffectFade, Scrollbar } from "swiper";
// Image
import Image from "next/image";

import slide from "/public/images/slides/01.jpg";

export const HeroSlider = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="flex h-full w-full items-center justify-center bg-[#101010] text-5xl font-bold text-black"
      >
        <SwiperSlide>
          <Image src={slide} alt="Cover Picture" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide} alt="Cover Picture" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide} alt="Cover Picture" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide} alt="Cover Picture" className="h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}