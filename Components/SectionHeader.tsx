import { sectionHeaderProps } from "@/types";
import React from "react";

const SectionHeader = ({ mark, title, titleBold }: sectionHeaderProps) => {
  return (
    <p className="text-xl lg:text-2xl text-black font-normal border-b border-[#EBEBEB] pb-[7px]">
      <span className="text-2xl font-semibold text-black border-b-2 pb-[9px] border-newGold">
        {mark}
      </span>{" "}
      {title}{" "}
      <span className="text-2xl font-semibold text-black ">{titleBold}</span>
    </p>
  );
};

export default SectionHeader;
