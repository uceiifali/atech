"use client";
import React, { useState } from "react";
const ShopSortBy = () => {
  const data = [
    { name: "Featured", value: 0 },
    { name: "Best Selling", value: 1 },
    { name: "Alphabetically, A-Z", value: 2 },
    { name: "Alphabetically, Z-A", value: 3 },
    { name: "Price, low to high", value: 4 },
    { name: "Price, high to low", value: 5 },
    { name: "Date, old to new", value: 6 },
    { name: "Date, new to old", value: 7 },
  ];
  const [filterName, setFilterName] = useState(data[2]);
  const [show, setShow] = useState(false);
  return (
    <div className="relative lg:w-[13vw]">
      <button
        className="flex items-start justify-start border border-[#cfcfcf] px-3 py-2 gap-1 w-[55vw] lg:w-[13vw]"
        onClick={() => setShow(!show)}
      >
        <span className="text-[#444] text-sm font-normal">Sort by :</span>
        <p className="text-black text-sm font-normal">{filterName.name}</p>
      </button>
      {/* filterContainer */}
      {show && (
        <div className="absolute z-10 bg-white py-2 shadow-2xl rounded gap-2 flex flex-col items-start justify-start w-full">
          {data.map((item, i) => (
            <button
              onClick={() => {
                setShow(false);
                setFilterName(item);
              }}
              className="w-full px-4 text-[#A4A4A4] py-2 text-left hover:bg-newGold hover:text-white "
              key={i}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopSortBy;
