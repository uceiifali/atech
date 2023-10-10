import { AboutVissionProps } from "@/types";
import Image from "next/image";
import React from "react";

const AboutMissionVissionItem = ({ item }: { item: AboutVissionProps }) => {
  return (
    <div className="lg:w-[40vw] w-[90vw] flex items-start justify-center flex-col gap-4 mt-8">
      <Image
        src={item.img}
        alt="VisionMission"
        className="object-contain w-full lg:w-[40vw] lg:h-[418.605px]"
      />
      <p className="text-black text-2xl font-normal">{item.title}</p>
      <p className="text-[#8C8C8C] font-medium text-lg leading-7">
        {item.desc}
      </p>
    </div>
  );
};

export default AboutMissionVissionItem;
