import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";

import { CarouselContainer, StyledImage } from "./carousel.style";
import { Book } from "../../../store/bookApi.types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

type CarouselProps = {
  bookList: Book[];
};

export const Carousel = ({ bookList }: CarouselProps) => {
  const books = [...bookList, ...bookList];
  return (
    <CarouselContainer>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        loop
        autoplay={{
          stopOnLastSlide: false,
        }}
        modules={[FreeMode]}
      >
        {books.length ? (
          books.map((book) => (
            <SwiperSlide key={uuidv4()}>
              <StyledImage src={book.img_url} />
            </SwiperSlide>
          ))
        ) : (
          <div>
            <p>データが見つかりませんでした。</p>
          </div>
        )}
      </Swiper>
    </CarouselContainer>
  );
};
