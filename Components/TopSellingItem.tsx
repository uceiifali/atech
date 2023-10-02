"use client";
import React, { useState } from "react";
import TopSel1 from "@/public/topsel1.png";
import Image from "next/image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { ProductsProps, TopSellingItemProps } from "@/types";

const TopSellingItem = ({
  item,
  full,
}: {
  item: TopSellingItemProps;
  full: ProductsProps;
}) => {
  return (
    <div
      className={` ${
        full ? "lg:w-[250px] w-full" : "w-full"
      }  h-[320px] rounded flex items-center justify-start py-8   flex-col overflow-hidden hover:shadow-lg  relative  group `}
    >
      {item.discount && (
        <div className="absolute right-2 top-2 bg-[#D01418] group-hover:opacity-50 rounded-sm flex items-center justify-center p-1">
          <p className="text-xs font-normal text-white">{item.discount}</p>
        </div>
      )}
      {item.outOfStock && (
        <div className="absolute right-2 top-10 bg-[#000] group-hover:opacity-50 rounded-sm flex items-center justify-center p-1">
          <p className="text-xs  lg:font-normal text-white">Out Stock</p>
        </div>
      )}
      <div className="absolute -left-10 group-hover:left-2 transition-all top-2 flex items-center justify-center flex-col gap-2 ">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-newGold transition-all  border border-[#838383] ">
          <AiOutlineHeart className="text-[#838383] hover:text-white transition-all " />
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-newGold transition-all  border border-[#838383] ">
          <AiOutlineEye className="text-[#838383] hover:text-white transition-all " />
        </div>
      </div>
      <Image
        src={item.image}
        alt="TopSel1"
        className="h-[180px] object-contain w-[186px] group-hover:opacity-50 transition-all"
      />
      <p className="lg:text-sm text-xs font-medium text-black">{item.name}</p>
      <div className="flex items-center justify-center flex-col bottom-8 group-hover:-bottom-28 absolute  transition-all ">
        <Rater rating={item.stars} total={5} interactive={false} />
        <div className="flex w-full items-center justify-center gap-8 flex-row">
          <p className="text-[#0566D2] text-sm lg:text-base font-medium">
            ${item.newPrice}
          </p>
          <p className="text-[#A4A4A4] text-sm lg:text-base font-medium text line-through	">
            ${item.oldPrice}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-28 group-hover:bottom-8 transition-all">
        <button className="bg-newGold w-[150px] md:w-[140px] lg:w-[174px]  h-[36px] lg:h-[44px] rounded-3xl text-white font-normal text-base ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default TopSellingItem;
