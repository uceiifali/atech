import React from "react";
import Condor from "@/public/condor.png";
import Image from "next/image";
import CondorWatch from "@/public/condorWatch.png";
import CondorWatch2 from "@/public/condorWatch2.png";
import { ProductsProps } from "@/types";
const TopSellingBottomProduct2Pic = ({ full }: ProductsProps) => {
  return (
    <div
      className={` ${
        full ? "lg:w-[50vw]" : "lg:w-[520px]"
      } w-[98vw]  h-[169.202px] bg-gradient-to-r from-[#012343] to-[#014179] lg:hover:from-[#003d77] lg:hover:to-[#0067c2]  transition-all hover:bg-[#655A8F] flex rounded flex-col lg:flex-row px-2 lg:px-6 overflow-hidden group p-2 gap-3`}
    >
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center lg:items-start lg:justify-around flex-col">
        <Image
          src={Condor}
          alt="Condor"
          width={39.103}
          height={12.634}
          className="object-contain"
        />
        <p className="text-lg text-white font-medium">
          Big Sale <span className="text-[#FFD800]">All in One </span>Smart One
        </p>
        <button className="text-sm font-medium text-white underline underline-offset-2 hover:underline-offset-4 transition-all">
          Pre - Oder Now
        </button>
      </div>
      <div className="relative">
        <Image
          src={CondorWatch}
          alt="CondorTV"
          className="object-contain lg:w-[400px] w-full  h-[80px] lg:h-full lg:group-hover:translate-y-56 transition-all"
        />
        <Image
          src={CondorWatch2}
          alt="CondorTV2"
          className="object-contain lg:w-[400px] w-full  h-[80px] lg:h-full translate-y-40 lg:group-hover:-translate-y-40 transition-all"
        />
      </div>
    </div>
  );
};

export default TopSellingBottomProduct2Pic;
