import Image from "next/image";
import React from "react";
import Prodct from "@/public/topsel1.png";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ShopItem = ({ grid }: { grid: number }) => {
  return (
    <div
      className={` ${
        grid === 0
          ? "w-[48vw] lg:w-[40vw] flex-col"
          : grid === 1
          ? "w-[20vw] lg:w-[20vw] flex-col"
          : "w-full lg:w-[80vw] flex-row"
      } lg:px-2 py-7 border border-[#EBEBEB] flex items-center justify-center  transition-all`}
    >
      <Image
        src={Prodct}
        alt="Prodct"
        className={`object-contain ${
          grid === 2
            ? " w-[50vw] lg:h-[18vw] h-[300px] "
            : " lg:h-[18vw] h-[300px] w-full lg:w-[10vw]"
        }  `}
      />
      <div
        className={`flex flex-col    ${
          grid === 2
            ? "w-[50vw] h-full items-center gap-4 justify-center"
            : "items-start justify-center"
        }`}
      >
        <p className="text-lg text-newGold font-semibold ">URBAN3 PLUS</p>
        <Rater rating={3} total={5} interactive={false} />
        <p className="text-lg text-black font-semibold ">£177.82</p>
        <button className="w-[174.8px] h-[40px] rounded bg-newGold text-sm text-white font-medium">
          Add To Cart
        </button>
        <button className="w-[174.8px] h-[40px] rounded bg-[#fff] text-sm text-[#888] font-medium border border-[#888] mt-4 ">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
