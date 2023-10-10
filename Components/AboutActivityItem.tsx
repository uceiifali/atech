import { aboutActivityItemProps } from "@/types";
import Image from "next/image";
import React from "react";

const AboutActivityItem = ({ item }: { item: aboutActivityItemProps }) => {
  const formattedId = (item.id + 1).toString().padStart(2, "0");
  return (
    <div className="lg:w-[440px] w-[90vw] h-[332px] rounded-md bg-white p-5 lg:p-8 gap-5 flex flex-col items-start ">
      <div className="flex items-center justify-between  w-full  ">
        <Image
          src={item.logo}
          alt="Logo"
          className="object-contain w-[81px] h-[81px] "
        />
        <p className="text-[#F3F5F6] text-7xl font-semibold">{formattedId}</p>
      </div>
      <h1 className="text-newBlack text-sm font-semibold ">{item?.title}</h1>
      <p className="text-[#A1A1A1] font-normal text-xs leading-5">
        {item.desc}
      </p>
    </div>
  );
};

export default AboutActivityItem;
