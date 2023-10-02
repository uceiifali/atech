import React from "react";
import Payment from "@/public/paymentMeth.png";
import Image from "next/image";
const FooterThree = () => {
  return (
    <div className="w-[100vw] flex gap-4 lg:gap-0 lg:items-end justify-between flex-col-reverse lg:flex-row px-4 py-5 ">
      <div>
        <p className="text-xs  lg:text-base text-[#999] font-normal">
          Copyright © <span className="text-newGold">ATECH</span> all rights
          reserved. Powered by <span className="text-newGold">Aiwa group.</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="flex flex-row gap-3">
          <div className="w-12 h-12 rounded bg-[#40C1DF]" />
          <div className="w-12 h-12 rounded bg-[#3C5B9B]" />
          <div className="w-12 h-12 rounded bg-[#C72982]" />
          <div className="w-12 h-12 rounded bg-[#C619B8]" />
          <div className="w-12 h-12 rounded bg-[#FF0E00]" />
        </div>
        <Image src={Payment} alt="Payment" className="object-contain" />
      </div>
    </div>
  );
};

export default FooterThree;
