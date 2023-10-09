"use client";
import { shopCategoryProps } from "@/types";
import React, { useState } from "react";

const ShopBarItem = ({
  item,
  activeCategory,
  setActiveCategory,
}: {
  item: shopCategoryProps;
  activeCategory?: number | null;
  setActiveCategory: (category: number) => void;
}) => {
  const firstName = item.name && item.name.split(" ")[0];
  const SecoundName = item.name && item.name.split(" ")[1];
  const lastName = item.name && item.name.split(" ")[2];

  return (
    <div
      className={`flex items-start justify-center w-[270px] border border-[#C2C1C1] rounded  flex-col p-4`}
    >
      <p className="text-xl lg:text-xl text-black font-normal border-b border-[#EBEBEB] pb-[7px]">
        <span
          className={`text-xl font-semibold text-black border-b-2 pb-[9px] border-newGold`}
        >
          {firstName}
        </span>{" "}
        {SecoundName} {lastName}
      </p>

      {item.categories.map((cat, i) => (
        <div
          className={`flex items-start justify-center mt-4 w-full flex-col`}
          key={i}
        >
          <button
            onClick={() => setActiveCategory(cat?.id)}
            className={`flex items-center justify-center flex-row text-base font-normal ${
              cat?.price || cat?.size ? "gap-1" : "gap-2"
            }`}
          >
            <div
              className={`${
                cat.id === activeCategory ? "bg-newGold" : "bg-white"
              } w-4 h-4 border border-[#D8D8D8] rounded-full`}
            />
            {cat.color ? (
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: cat.color }}
              />
            ) : null}
            <p>{cat.name ? cat?.name : cat?.brand}</p>
            <span>{cat.products && `(${cat?.products})`}</span>
            <span>{cat.price && cat?.price}</span>
            <span>{cat.size && cat?.size}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
export default ShopBarItem;
