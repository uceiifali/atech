import Image from "next/image";
import React from "react";
import Banner from "@/public/CondorBanner.png";
import SectionHeader from "./SectionHeader";
import TopSellingProducts from "./TopSellingProducts";
import TopSellingBottomProduct2Pic from "./TopSellingBottomProduct2Pic";
const TopSellingCategory = () => {
  return (
    <div className="w-[100vw] flex flex-col ">
      <div className="px-3">
        <SectionHeader
          mark="Top"
          title="Selling Products from"
          titleBold="Condor"
        />
      </div>
      <Image
        src={Banner}
        alt="Banner"
        className=" object-contain lg:object-cover w-[100vw] h-full lg:h-[316px] mt-3"
      />
      <TopSellingProducts full={true} />
      <div className="flex flex-col lg:flex-row items-center justify-around gap-3 px-2 ">
        <TopSellingBottomProduct2Pic full={true} />
        <TopSellingBottomProduct2Pic full={true} />
      </div>
    </div>
  );
};

export default TopSellingCategory;
