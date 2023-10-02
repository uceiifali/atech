import { DateProps } from "@/types";
import React from "react";
import Countdown from "react-countdown-simple";

const CountDown = () => {
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 1)
  ).toISOString();
  const renderer = ({ days, hours, minutes, seconds }: DateProps) => (
    <div className="flex items-center justify-between w-[90vw] lg:w-[25vw] flex-row gap-4">
      <div className="bg-[#F2F5F7] w-14 h-14 rounded-full flex items-center justify-center flex-col text-xs text-[#888]">
        {days}
        <p className="text-xs text-[#888] font-normal">Days</p>
      </div>
      <div className="bg-[#F2F5F7] w-14 h-14 rounded-full flex items-center justify-center flex-col text-xs text-[#888]">
        {hours}
        <p className="text-xs text-[#888] font-normal">Hrs</p>
      </div>
      <div className="bg-[#F2F5F7] w-14 h-14 rounded-full flex items-center justify-center flex-col text-xs text-[#888]">
        {minutes}
        <p className="text-xs text-[#888] font-normal">Mins</p>
      </div>
      <div className="bg-[#F2F5F7] w-14 h-14 rounded-full flex items-center justify-center flex-col text-xs text-[#888]">
        {seconds}
        <p className="text-xs text-[#888] font-normal">Secs</p>
      </div>
    </div>
  );

  return <Countdown targetDate={oneHour} renderer={renderer} />;
};

export default CountDown;
