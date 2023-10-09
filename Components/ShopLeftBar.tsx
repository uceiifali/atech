"use client";

import React, { useState } from "react";
import ShopBarItem from "./ShopBarItem";

const ShopLeftBar = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const data = [
    {
      name: "Filter By Categories",
      categories: [
        { name: "All Categories", products: "74", id: 0 },
        { name: "Laptop & Computer", products: "17", id: 1 },
        { name: "Speaker & Audio", products: "8", id: 2 },
        { name: "Cellphone", products: "24", id: 3 },
        { name: "Video Game", products: "18", id: 4 },
        { name: "Accessories", products: "12", id: 5 },
        { name: "Delivery & Dispatch", products: "0", id: 6 },
      ],
    },
    {
      name: "Filter By Brands",
      categories: [
        { brand: "Nardi", id: 7 },
        { brand: "Ace", id: 8 },
        { brand: "Cristor", id: 9 },
        { brand: "Condor", id: 10 },
      ],
    },
    {
      name: "Filter By Color",
      categories: [
        { color: "#FFD700", id: 11 },
        { color: "#FF0000", id: 12 },
        { color: "#FA8072", id: 13 },
        { color: "#F5DEB3", id: 14 },
        { color: "#A9A9A9", id: 15 },
        { color: "#A52A2A", id: 16 },
        { color: "#004FC6", id: 17 },
        { color: "#000000", id: 18 },
      ],
    },
    {
      name: "Filter By Price",
      categories: [
        { price: "$25.00 - $50.00", id: 19 },
        { price: "$50.00 - $75.00", id: 20 },
        { price: "$75.00 - $100.00", id: 21 },
        { price: "$100.00 - $200.00", id: 22 },
      ],
    },
    {
      name: "Filter By Size",
      categories: [
        { size: "10G", id: 23 },
        { size: "20G", id: 24 },
        { size: "30G", id: 25 },
        { size: "50G", id: 26 },
      ],
    },
  ];
  return (
    <div className="px-2 py-4 lg:flex flex-col gap-4 hidden">
      {data.map((item) => (
        <ShopBarItem
          item={item}
          key={item.name}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </div>
  );
};

export default ShopLeftBar;
