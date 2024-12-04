import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { CarouselCard } from "./CarouselCard/carousel-card";

export const Carousel = () => {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
    >
      <CarouselCard />
    </Swiper>
  );
};
