"use client";
import React, { useState } from "react";
import ProductBottomDesx from "./ProductBottomDesx";
import Productinformation from "./Productinformation";
import ProductReviews from "./ProductReviews";

const ProductSections = () => {
  const [active, setActive] = useState(0);
  const rev = 4;
  const sections = [
    { name: "Description", id: 0 },
    { name: "Additional Information", id: 1 },
    { name: `Reviews ( ${rev} )`, id: 2 },
  ];
  return (
    <div className="flex  justify-start lg:px-16 px-3  gap-4 flex-col h-[60vh]">
      <div className="flex items-center justify-start   gap-4">
        {sections.map((item) => (
          <button
            onClick={() => setActive(item.id)}
            key={item.id}
            className={`${
              active === item.id
                ? "text-newGold border-b border-newGold  "
                : "text-newBlack"
            } text-sm lg:text-3xl font-semibold pb-2 transition-all`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {active === 0 ? (
        <ProductBottomDesx />
      ) : active === 1 ? (
        <Productinformation />
      ) : active === 2 ? (
        <ProductReviews />
      ) : null}
    </div>
  );
};

export default ProductSections;
