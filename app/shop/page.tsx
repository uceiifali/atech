import PathTracker from "@/Components/PathTracker";
import ProductBanners from "@/Components/ProductBanners";
import React from "react";

const page = () => {
  return (
    <div>
      <PathTracker path={"Shop"} />
      <ProductBanners />
    </div>
  );
};

export default page;
