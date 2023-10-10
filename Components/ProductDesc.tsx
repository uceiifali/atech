"use client";
import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import ProductSpe from "./ProductSpe";

const ProductDesc = () => {
  return (
    <div className="lg:w-[45vw] w-full px-2 lg:px-0 py-8 gap-4">
      <div className="flex items-start flex-col gap-3 border-b pb-5 border-[#EBEBEB]">
        <p className="text-newGold text-2xl font-semibold">URBAN3 PLUS</p>
        <div className="flex items-end justify-center flex-row gap-4">
          <Rater rating={4} total={5} interactive={false} />
          <p className="text-sm font-light text-[#999] flex gap-3 ">
            <span> / </span> 2 reviews
          </p>
        </div>
        <p className="text-[#CC1414] font-semibold text-sm">
          Discount: $27.00 (29%)
        </p>
        <div className="flex items-end gap-1">
          <p className="text-2xl text-[#CC1414] font-semibold ">£53.35</p>
          <p className="text-base text-[#A4A4A4] font-semibold">£74.22</p>
        </div>
      </div>
      <ProductSpe />
    </div>
  );
};

export default ProductDesc;
