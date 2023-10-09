import { aboutActivityItemProps } from "@/types";
import Image from "next/image";
import React from "react";

const AboutActivityItem = ({ item }: { item: aboutActivityItemProps }) => {
  return (
    <div className="w-[440px] h-[332px] rounded-md bg-white">
      <div className="flex items-center justify-between px-4 ">
        <Image
          src={item.logo}
          alt="Logo"
          className="object-contain w-[81px] h-[81px]"
        />
      </div>
    </div>
  );
};

export default AboutActivityItem;
