import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { CarouselContainer, StyledImage } from "./carousel.style";
import { Book } from "../../../store/bookApi.types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type CarouselProps = {
  bookList: Book[];
};

export const Carousel = ({ bookList }: CarouselProps) => {
  const books = [...bookList, ...bookList];
  return (
    <CarouselContainer>
      <Swiper
        slidesPerView={6}
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
              <Link to={`/book/${book.id_book}`}>
                <StyledImage src={book.img_url} />
              </Link>
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
