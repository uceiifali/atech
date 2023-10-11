import Image from "next/image";
import React from "react";
import Phone from "@/public/phoneGroup.png";
import AceLogo from "@/public/ace.png";
import TopSellingProducts from "./TopSellingProducts";
import TopSellingBottomProduc from "./TopSellingBottomProduc";
import TopSellingBottomProduct2Pic from "./TopSellingBottomProduct2Pic";
import SectionHeader from "./SectionHeader";
const TopSellingHomeScall = () => {
  return (
    <div className=" w-full lg:w-[100vw] h-full lg:h-[98vh] flex-col lg:flex-row p-1 lg:p-8 flex gap-8 items-start justify-start pb-16">
      <div className=" w-full md:h-[70vh]  md:w-[50vw] md:self-center  lg:w-[20vw]  rounded-lg h-[90vh] lg:h-[90vh]  bg-phoneBG bg-contain bg-center   bg-no-repeat flex gap-4 items-center justify-center flex-col p-8 lg:p-0">
        <Image
          src={AceLogo}
          alt="AceLogo"
          className="object-contain w-[39.412px] h-[40.755px]"
        />
        <Image
          src={Phone}
          alt="Phone"
          className="object-contain w-[80vw] lg:h-[40vh] md:h-[30vh] h-[40vh]"
        />
        <p className="text-white font-medium text-4xl">BUZZ 3G</p>
        <p className="text-xl text-[#C0C0C0] font-normal">SC7731E</p>
      </div>
      <div className="flex  justify-between flex-col md:h-[60vh]  lg:h-[90vh] ">
        <SectionHeader mark="Top" title="Selling Products" />
        <TopSellingProducts full={false} />
        <div className="flex lg:items-center justify-between flex-col gap-4 lg:gap-0 lg:flex-row  w-full  lg:h-[500px] ">
          <TopSellingBottomProduct2Pic full={false} />
          <TopSellingBottomProduc />
        </div>
      </div>
    </div>
  );
};

export default TopSellingHomeScall;
