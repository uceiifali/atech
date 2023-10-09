import React from "react";
import SectionHeader from "./SectionHeader";

const BlogLeftBarSection = () => {
  return (
    <div className="flex flex-col ">
      <SectionHeader mark={"Categories"} />
      <div className="flex items-start justify-start border-b border-[#EBEBEB] px-2">
        <button className="text-base font-normal text-[#222] flex items-center gap-1 justify-start py-2 ">
          Cameras <span className="font-medium text-[#666] text-xs">(01)</span>
        </button>
      </div>
      <div className="flex items-start justify-start border-b border-[#EBEBEB] px-2">
        <button className="text-base font-normal text-[#222] flex items-center gap-1 justify-start py-2 ">
          Accessories{" "}
          <span className="font-medium text-[#666] text-xs">(01)</span>
        </button>
      </div>
    </div>
  );
};

export default BlogLeftBarSection;
