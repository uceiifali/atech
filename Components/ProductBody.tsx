"use client";
import React, { useState } from "react";
import ProductBarLeft from "./ProductBarLeft";
import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";
import ProductSections from "./ProductSections";
import ProductPopUP from "./ProductPopUP";
import { StaticImageData } from "next/image";

const ProductBody = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [product, setProduct] = useState<StaticImageData | string | null>(null);
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <ProductBarLeft
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          product={product}
          setProduct={setProduct}
        />
        <ProductImage
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          product={product}
          setProduct={setProduct}
        />
        <ProductDesc />
      </div>
      <ProductSections />
      <ProductPopUP
        product={product}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
};

export default ProductBody;
