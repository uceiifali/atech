"use client";
import React, { useState } from "react";

const ProductSpe = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);
  const data = [
    { key: "Platform:", value: "SC9863A,Octa core" },
    { key: "Screen:", value: "6.82'' HD+ IPS Incell, 2.5D glass" },
    { key: "Memory:", value: " 32+2GB" },
    { key: "Camera:", value: "5+13MP AF+2+2MP, real triple camera " },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full bg-[#555] h-[3.5vh] flex items-center rounded">
        <p className="text-white text-sm font-normal px-4">
          Spend £386.56 to Free Shipping
        </p>
      </div>
      <div className="flex  items-start flex-col gap-2">
        {data.map((item) => (
          <div className="flex items-center gap-4">
            <p className="font-normal text-base text-[#666]   w-20">
              {item.key}
            </p>
            <p className="font-normal text-base text-[#666] ">{item.value}</p>
          </div>
        ))}
      </div>
      <p className="text-newBlack text-sm font-semibold ">
        Hurry Up! Only <span className="text-[#CC1414]">14</span> Left in Stock!
      </p>
      <div className="flex items-center  flex-row gap-4">
        <p className="text-newBlack font-medium text-sm">Size:</p>
        <div className="flex items-center flex-row gap-4">
          <button
            className={`${
              size === 0
                ? "border border-[#0A2748] text-newBlack"
                : "border border-[#E1E1E1] text-[#808992]"
            }  font-medium text-xs  rounded px-1 py-[1px] `}
            onClick={() => setSize(0)}
          >
            10G
          </button>
          <button
            className={`${
              size === 1
                ? "border border-[#0A2748] text-newBlack"
                : "border border-[#E1E1E1] text-[#808992]"
            }  font-medium text-xs  rounded px-1 py-[1px] `}
            onClick={() => setSize(1)}
          >
            50G
          </button>
          <button
            className={`${
              size === 2
                ? "border border-[#0A2748] text-newBlack"
                : "border border-[#E1E1E1] text-[#808992]"
            }  font-medium text-xs  rounded px-1 py-[1px] `}
            onClick={() => setSize(2)}
          >
            100G
          </button>
        </div>
      </div>
      <div className="flex items-center  flex-row gap-4">
        <p className="text-newBlack font-medium text-sm">Color:</p>
        <div className="flex items-center flex-row gap-4">
          <button className="bg-[#00F] text-newBlack font-medium text-xs  rounded w-7 h-4 "></button>
          <button className="bg-black text-newBlack font-medium text-xs  rounded  w-7 h-4"></button>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center justify-between px-4 border border-[#E1E1E1] w-[122px] h-[50px]">
          <button
            className="text-newBlack text-xl font-normal"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </button>
          <span className="text-newBlack text-sm font-normal">{count}</span>
          <button
            className="text-newBlack text-xl font-normal"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button className="bg-newGold w-full h-[50px] text-white font-medium text-sm">
          Add To Cart
        </button>
      </div>
      <button className="bg-newBlack w-full h-[50px] text-white font-medium text-sm">
        Buy it now
      </button>
      <div className="flex gap-5 h-[50px]">
        <button className="text-[#666] font-normal text-sm">
          Add to compare
        </button>
        <button className="text-[#666] font-normal text-sm">
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductSpe;
