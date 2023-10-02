import React from "react";
import Condor from "@/public/condor.png";
import Image from "next/image";
import CondorTV from "@/public/condorTv.png";
const TopSellingBottomProduc = () => {
  return (
    <div className="w-full lg:w-[520px] h-[169.202px] bg-[#504872] transition-all lg:hover:bg-[#655A8F] flex lg:flex-row px-2 lg:px-6 overflow-hidden group flex-col">
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
      <div>
        <Image
          src={CondorTV}
          alt="CondorTV"
          className="object-contain w-full lg:w-[400px]  h-[100px] lg:h-full lg:group-hover:scale-150 transition-all"
        />
      </div>
    </div>
  );
};

export default TopSellingBottomProduc;
