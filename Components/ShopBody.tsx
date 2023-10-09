"use client";
import React, { useState } from "react";
import { MdList } from "react-icons/md";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import ShopSortBy from "./ShopSortBy";
import ShopProducts from "./ShopProducts";
const ShopBody = () => {
  const [grid, setGrid] = useState(0);
  return (
    <div className="p-2 flex flex-col">
      <p className="text-black text-2xl font-normal">Products</p>
      <div className=" flex w-full lg:w-[80vw] flex-col lg:flex-row   items-center justify-between">
        <div className="flex items-center justify-center">
          <p className="text-[#666] text-sm font-normal">
            Showing 1-24 of 74 results
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="flex items-center justify-center"
            onClick={() => setGrid(0)}
          >
            <HiViewGrid
              className={` ${
                grid === 0 ? "text-newGold text-5xl" : "text-[#CFCFCF] text-4xl"
              }  `}
            />
          </button>
          <button
            className="lg:flex items-center justify-center hidden "
            onClick={() => setGrid(1)}
          >
            <BsGrid3X2GapFill
              className={` ${
                grid === 1
                  ? "text-newGold text-5xl "
                  : "text-[#CFCFCF] text-4xl"
              }  `}
            />
          </button>
          <button
            className="flex items-center justify-center"
            onClick={() => setGrid(2)}
          >
            <MdList
              className={` ${
                grid === 2 ? "text-newGold text-5xl" : "text-[#CFCFCF] text-4xl"
              } `}
            />
          </button>
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[13vw]">
          <ShopSortBy />
        </div>
      </div>
      <ShopProducts grid={grid} />
    </div>
  );
};

export default ShopBody;
