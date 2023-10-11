"use client";
import Image from "next/image";
import React from "react";
import CondorMobile from "@/public/CondorMobile.png";
import Rater from "react-rater";
import RangeBar from "./RangeBar";
import CountDown from "./CountDown";
import "react-rater/lib/react-rater.css";

const DealsOfTheDayItem = () => {
  return (
    <div className="lg:h-[350px] h-full  flex items-center justify-center flex-col lg:flex-row w-full lg:w-[50vw] border-b-2  lg:border-b-0 lg:border-r-2 pb-2 lg:pr-4 mt-4 border-[#EBEBEB]">
      <div className=" lg:w-[40vw] w-full   h-full flex items-end justify-center relative">
        <div className="absolute right-4 top-8  rounded bg-newGold w-[50px] h-[20px] flex items-center justify-center">
          <p className="text-xs text-white font-normal">360</p>
        </div>
        <div className="absolute right-4 top-14  rounded bg-[#D01418] w-[50px] h-[20px] flex items-center justify-center">
          <p className="text-xs text-white font-normal">-29%</p>
        </div>
        <Image
          src={CondorMobile}
          alt="CondorMobile"
          className="object-contain w-[198px] h-[280px]"
        />
      </div>
      <div className="w-full flex items-start justify-center gap-4 h-full flex-col px-4">
        <p className="text-4xl font-semibold text-black">Plume L4</p>
        <Rater rating={3} total={5} interactive={false} />
        <div className="flex  items-center justify-center gap-8 flex-row">
          <p className="text-newGold text-base font-medium">$400</p>
          <p className="text-[#A4A4A4] text-base font-medium text line-through	">
            $300
          </p>
        </div>
        <div className="w-full">
          <RangeBar sold={10} ava={20} percentage={20} />
        </div>
        <p className="text-base font-medium text-black">
          Hurry Up! Offer ends in:
        </p>
        <div className="w-full">
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDayItem;
