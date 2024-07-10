import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[350px] mySwiper"
      >
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md  flex justify-center items-center text-white bg-blue-500">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px]  overflow-hidden rounded-md flex justify-center items-center text-white bg-blue-500">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
}
