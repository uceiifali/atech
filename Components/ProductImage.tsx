import React from "react";
import Productone from "@/public/product2.png";
import Producttwo from "@/public/product22.png";
import Image, { StaticImageData } from "next/image";
import { wishListProps } from "@/types";
const ProductImage = ({
  isSidebarOpen,
  setSidebarOpen,
  product,
  setProduct = () => {},
}: wishListProps) => {
  const handlePop = (item: StaticImageData) => {
    setSidebarOpen(!isSidebarOpen);
    setProduct(item);
  };
  return (
    <div className=" w-full lg:w-[40vw]  flex items-center justify-center flex-col  py-4 lg:py-8  mt-3 lg:mt-8">
      <button onClick={() => handlePop(Productone)}>
        <Image
          src={Productone}
          alt="productone"
          className="object-contain w-[80vw] h-[50vh] lg:w-full lg:h-[70vh] "
        />
      </button>
      <div className="flex items-center justify-center flex-row w-full gap-4 lg:gap-6 mt-8 lg:mt-14">
        <button
          onClick={() => handlePop(Productone)}
          className=" border border-[#C2C2C2] rounded-2xl w-[116px] h-[116px] p-4"
        >
          <Image
            src={Productone}
            alt="productone"
            className="object-contain w-full h-full  cursor-pointer"
          />
        </button>
        <button
          onClick={() => handlePop(Producttwo)}
          className=" border border-[#C2C2C2] rounded-2xl w-[116px] h-[116px] p-4"
        >
          <Image
            src={Producttwo}
            alt="Producttwo"
            className="object-contain w-full h-full cursor-pointer "
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
