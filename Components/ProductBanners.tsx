"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BannerOne from "@/public/productBanner1.png";
import BannerTwo from "@/public/productBanner2.png";
import BannerThree from "@/public/productBanner3.png";
import BannerFour from "@/public/productBanner4.png";
import Image from "next/image";
const ProductBanners = () => {
  const banners = [
    { name: "Banner", img: BannerOne },
    { name: "Banner", img: BannerTwo },
    { name: "Banner", img: BannerThree },
    { name: "Banner", img: BannerFour },
  ];
  return (
    <Splide
      options={{
        gap: "1rem",
        rewind: true,
        arrows: false,
        pagination: false,
        autoplay: true,
      }}
      className="w-[100vw]"
    >
      {banners?.map((item, i) => (
        <SplideSlide key={i}>
          <Image
            src={item.img}
            alt={item.name}
            className="object-contain lg:object-cover lg:h-[224px] w-[100vw]"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductBanners;
