import { BannerItemProps } from "@/types";
import Image from "next/image";
import React from "react";

const HomeBannerItem = ({ item }: { item: BannerItemProps }) => {
  return (
    <div
      className={`lg:w-[25vw] w-[99vw] rounded-md h-[160px] overflow-hidden   ${item.bgColor} flex items-center justify-around  `}
    >
      <div className="h-full flex w-[40vw] lg:w-[10vw] items-start justify-evenly flex-col ">
        <Image
          src={item.logo}
          alt={item.logo}
          width={47.44}
          height={10}
          className="object-contain"
        />
        <p className="text-white  text-xl font-normal">{item.sale}</p>
        <span className="text-white  text-base font-normal">{item.cat}</span>
      </div>
      <div className="lg:w-[10vw] w-[50vw] flex items-center justify-end">
        <Image
          src={item.product}
          alt={item.product}
          width={300}
          height={100}
          className="object-contain hover:scale-125 lg:w-[150px] w-[30vw] h-full  md:w-[15vw] lg:h-[150px] transition-all"
        />
      </div>
    </div>
  );
};

export default HomeBannerItem;
