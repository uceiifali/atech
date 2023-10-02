import { RangeProps } from "@/types";
import React from "react";

const RangeBar = ({ percentage, sold, ava }: RangeProps) => {
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2  text-xs flex rounded bg-[#F2F5F7]">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-newGold"
        ></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-normal inline-block uppercase rounded-full text-[#666]">
            Sold : {sold}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm font-normal  inline-block text-[#666]">
            Avalibale {ava}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeBar;
