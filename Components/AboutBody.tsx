import React from "react";
import AboutBanner from "@/public/AboutBanner.png";
import Image from "next/image";
const AboutBody = () => {
  return (
    <div className="lg:bg-aboutBanner bg-center w-[100vw]  lg:h-[77vh] bg-cover lg:bg-contain bg-no-repeat flex items-center justify-start flex-col px-4 lg:px-0 ">
      <div className="flex items-center flex-col justify-center lg:justify-start w-full lg:w-[45vw] mt-5">
        <p className="lg:text-white text-black text-3xl md:text-4xl lg:text-6xl font-semibold">
          About Us
        </p>
        <p className="lg:text-[#DEDEDE] text-newGray md:text-sm text-xs  font-light lg:leading-8 leading-5 lg:opacity-70">
          ATECH is looking to be one of the leading companies in trading by
          providing the commodity required by customers in North Africa and the
          middle east. The variety of goods will be supporting the company to
          exist. The main line of business is home appliances Trading.
        </p>
      </div>
    </div>
  );
};

export default AboutBody;
