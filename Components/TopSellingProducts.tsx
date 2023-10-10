"use client";
import React from "react";
import TopSellingItem from "./TopSellingItem";
import TopSel1 from "@/public/topsel1.png";
import TopSel2 from "@/public/topsel2.png";
import TopSel3 from "@/public/topsel3.png";
import TopSel4 from "@/public/topsel4.png";
import TopSel5 from "@/public/topsel5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ProductsProps } from "@/types";

const TopSellingProducts = ({ full }: ProductsProps) => {
  const data = [
    {
      name: "Smart Phone “URBAN 3 PLUS”",
      image: TopSel1.src,
      outOfStock: true,
      discount: "-7%",
      stars: 3,
      oldPrice: 500,
      newPrice: 210,
    },
    {
      name: "Récepteur Satellite TORNADO TR400",
      image: TopSel2.src,
      outOfStock: false,
      discount: "-12%",
      stars: 2,
      oldPrice: 500,
      newPrice: 210,
    },
    {
      name: "CSB-T600",
      image: TopSel3.src,
      outOfStock: true,
      // discount: "-7%",
      stars: 3,
      oldPrice: 400,
      newPrice: 110,
    },
    {
      name: "Gas Water Heater 16 liters ",
      image: TopSel4.src,
      outOfStock: false,
      discount: "-2%",
      stars: 4,
      oldPrice: 800,
      newPrice: 200,
    },
    {
      name: "Smart Phone “URBAN 3 PLUS”",
      image: TopSel5.src,
      outOfStock: true,
      discount: "-4%",
      stars: 5,
      oldPrice: 777,
      newPrice: 110,
    },
  ];
  return (
    <div className={` w-full ${full ? "w-[]100vw" : "lg:w-[70vw]"}  `}>
      <div className="flex items-center py-7  w-full ">
        <Splide
          options={{
            gap: "1rem",
            rewind: true,
            arrows: false,
            pagination: false,
            autoplay: true,
            perPage: 4,
            breakpoints: {
              350: {
                perPage: 1,
              },
              768: {
                perPage: 2, // 2 items for tablets (e.g., iPad)
              },
              1024: {
                perPage: 4, // 4 items for laptops and larger screens
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {data?.map((item, i) => (
            <SplideSlide
              key={i}
              className={` flex items-center justify-center ${
                full ? "w-[100vw]" : "lg:w-[259px]"
              }   p-3`}
            >
              <TopSellingItem item={item} full={full} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopSellingProducts;
