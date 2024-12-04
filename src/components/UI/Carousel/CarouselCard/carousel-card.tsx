import { SwiperSlide } from "swiper/react";
import { StyleImage } from "./carousel-card.style";
import { Book } from "../../../../store/bookApi.types";

type CarouselCardProps = {
  book?: Book;
};

export const CarouselCard = ({ book }: CarouselCardProps) => {
  console.log(book);
  return (
    <SwiperSlide>
      <StyleImage src="https://via.placeholder.com/300x150" alt="" />
    </SwiperSlide>
  );
};
