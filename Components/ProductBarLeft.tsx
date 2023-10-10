"use client";
import React from "react";
import bar1 from "@/public/bar1.png";
import bar2 from "@/public/bar2.png";
import bar3 from "@/public/bar3.png";
import bar4 from "@/public/bar4.png";
import bar5 from "@/public/bar5.png";
import bar6 from "@/public/bar6.png";
import bar7 from "@/public/bar7.png";
import bar8 from "@/public/bar8.png";
import Image, { StaticImageData } from "next/image";
import { wishListProps } from "@/types";
const ProductBarLeft = ({
  isSidebarOpen,
  setSidebarOpen,
  setProduct = () => {},
}: wishListProps) => {
  const imgs = [
    { image: bar1 },
    { image: bar2 },
    { image: bar3 },
    { image: bar4 },
    { image: bar5 },
    { image: bar6 },
    { image: bar7 },
    { image: bar8 },
  ];
  const handlePop = (item: StaticImageData) => {
    setSidebarOpen(!isSidebarOpen);
    setProduct(item);
  };
  return (
    <div className="lg:w-[8vw]  py-4 lg:py-8 px-2 flex items-center self-center gap-1 flex-row w-full lg:flex-col  rounded flex-wrap">
      {imgs.map((item, i) => (
        <button
          className="w-[70px] h-[100px] lg:w-full lg:h-[100px]  shadow-xl py-2"
          key={i}
          onClick={() => {
            handlePop(item.image);
          }}
        >
          <Image
            src={item.image}
            alt="img"
            className="object-contain  w-full h-full"
          />
        </button>
      ))}
    </div>
  );
};

export default ProductBarLeft;
