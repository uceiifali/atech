"use client";
import Image from "next/image";
import React from "react";
import Product from "../public/lap.png";
const CarouselThree = () => {
  return (
    <div className="lg:w-[73vw] w-[99vw] rounded-md  h-[700px] lg:h-[500px] relative flex items-center justify-center bg-fixed bg-center flex-col lg:flex-row bg-no-repeat	bg-cover bg-slide3">
      <div className="lg:w-[32vw] w-full flex items-center  lg:items-start lg:justify-between flex-col lg:px-8 lg:py-4 py-2">
        <div className="flex items-start flex-col gap-4 logoAnimate">
          <Image
            alt="nardiLogo "
            src={"/condor.png"}
            width={109}
            height={28}
            className="object-contain"
          />
        </div>
        <p className="text-white uppercase font-light text-base lg:text-6xl py-2 lg:py-5 TextAnimate">
          SCG 40H AV
        </p>
        <p className="text-white uppercase font-normal text-sm lg:text-base text-center lg:text-left leading-5  lg:leading-loose py-5 DescAnimate">
          4 burner gas – Semi-flush design – High Efficiencyburners for low
          consumption – Cast-iron pan supportswith coordinated burner caps – AV
          electronic ignitionand safety valves
        </p>
        <button className="w-[40vw] lg:w-[13vw] h-[7vh] bg-white rounded text-base font-semibold py-5 flex items-center justify-center buttonAnimation">
          Get it Now
        </button>
      </div>
      <Image
        src={Product}
        alt="product1"
        className="object-contain animatePic1 w-[100vw] lg:w-[40vw]  h-[50vh] lg:h-[40vh]"
        priority={false}
      />
    </div>
  );
};

export default CarouselThree;
