import Image from "next/image";
import React from "react";
import Banner from "@/public/aboutAtechBanner.png";
const AboutBanner = () => {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-0 mt-4 lg:mt-0 flex-col-reverse lg:flex-row w-[100vw] lg:h-[60vh]  ">
      <div className="flex items-start justify-center gap-7 flex-col w-full lg:w-1/2 px-4 lg:px-8">
        <p className="text-sm font-medium text-newGold">
          About us (WHO WE ARE?){" "}
        </p>
        <p className="text-4xl font-semibold text-newBlack">
          Hello, <br /> ATECH Trading LLC - FZ
        </p>
        <p className="text-base text-[#909090] font-medium">
          ATECH has the capability to be one of the world’s most valuable and
          admired trading platforms. With proven competencies in offering a wide
          range of products, which gather all demand needs in one channel. ATECH
          creates new easy trade through an offered variety of standard products
          from authorized manufacturers. We are developing our strategy to be
          one of the most world-valuable, innovative companies in the world.
        </p>
      </div>
      <Image
        src={Banner}
        alt="Banner"
        className="object-contain w-full lg:w-1/2 lg:h-[60vh]"
      />
    </div>
  );
};

export default AboutBanner;
