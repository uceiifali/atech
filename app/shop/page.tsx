import PathTracker from "@/Components/PathTracker";
import ProductBanners from "@/Components/ProductBanners";
import ShopBody from "@/Components/ShopBody";
import ShopLeftBar from "@/Components/ShopLeftBar";
import React from "react";

const page = () => {
  return (
    <div>
      <PathTracker path={"Shop"} />
      <ProductBanners />
      <div className="flex flex-col lg:flex-row  ">
        <ShopLeftBar />
        <ShopBody />
      </div>
    </div>
  );
};

export default page;
