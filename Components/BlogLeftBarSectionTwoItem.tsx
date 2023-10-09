import { BlogLeftBarSectionTwoProps } from "@/types";
import Image from "next/image";
import React from "react";

const BlogLeftBarSectionTwoItem = ({
  item,
}: {
  item: BlogLeftBarSectionTwoProps;
}) => {
  return (
    <div className="flex items-center justify-between flex-row h-[70px] mt-8">
      <Image
        alt="blog1"
        src={item?.image}
        width={200}
        height={200}
        className="object-contain w-[70px]  h-[70px] rounded"
      />
      <div className="flex items-start h-[70px]  justify-around  flex-col  w-[16vw]">
        <p className="text-base font-normal text-[#222]">
          {item.title?.substring(0, 50)}
        </p>
        <p className="text-sm font-normal text-[#999]">{item.date}</p>
      </div>
    </div>
  );
};

export default BlogLeftBarSectionTwoItem;
