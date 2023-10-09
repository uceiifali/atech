import React from "react";
import ShopItem from "./ShopItem";

const ShopProducts = ({ grid }: { grid: number }) => {
  return (
    <div
      className={`${
        grid === 0
          ? "grid grid-cols-2"
          : grid === 1
          ? "flex flex-wrap"
          : grid === 2
          ? "flex flex-col"
          : "flex-col"
      } mt-2`}
    >
      <ShopItem grid={grid} />
      <ShopItem grid={grid} />
      <ShopItem grid={grid} />
      <ShopItem grid={grid} />
    </div>
  );
};

export default ShopProducts;
