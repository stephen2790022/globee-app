import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";

export const Carousel = () => {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true} // Enable Free Mode
      pagination={{ clickable: true }} // Optional pagination
      spaceBetween={20} // Space between slides
      slidesPerView={3} // Number of slides visible at a time
    >
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Slide 2"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Slide 3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Slide 4"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Slide 5"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
