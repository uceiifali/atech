"use client";
import React from "react";
import Slide1 from "@/public/AceSlider.png";
import Slide2 from "@/public/AceSlider2.png";
import Slide3 from "@/public/AceSlider3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const ProductBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={Slide1}
          alt="slide1"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Slide2}
          alt="slide1"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Slide3}
          alt="slide1"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductBanner;
