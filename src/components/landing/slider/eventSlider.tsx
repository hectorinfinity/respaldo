import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { CustomCategory } from "./category/customCategory";
import { EventCardVert } from "../event/eventCardVert";

export const EventSlider = () => {
  const categories = [
    { name: "Artes Visuales", src: "/images/events/category/artes-visuales.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "Danza", src: "/images/events/category/danza.png", selected: true },
    { name: "Artes xsVisuales", src: "/images/events/category/artes-visuales.png", selected: true },
    { name: "Ci1ne", src: "/images/events/category/cine.png", selected: false },
    { name: "Da2nza", src: "/images/events/category/danza.png", selected: true },
    { name: "Arwtes Visuales", src: "/images/events/category/artes-visuales.png", selected: true },
    { name: "Cisne", src: "/images/events/category/cine.png", selected: false },
    { name: "Danxza", src: "/images/events/category/danza.png", selected: true },
    { name: "Artfes Visuales", src: "/images/events/category/artes-visuales.png", selected: true },
    { name: "Cinte", src: "/images/events/category/cine.png", selected: false },
    { name: "Da3nza", src: "/images/events/category/danza.png", selected: true },
]

  return (
    <div className="container w-[100%]">
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 980px
          1024: {
            slidesPerView: 7,
            spaceBetween: 40
          }
        }}
      >
          <SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide>
          <SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide><SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide><SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide><SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide><SwiperSlide className="flex-1">
            <EventCardVert />
          </SwiperSlide>
      </Swiper>
    </div>
  );
}