"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const BlogLeftBarSectionThree = () => {
  const [accpet, setAccept] = useState(false);
  return (
    <div className="flex  justify-center flex-col gap-4">
      <SectionHeader mark={"Newsletter"} />
      <p className="text-sm text-[#222] font-normal">
        Subscribe to our newsletter and get our newest updates right on your
        inbox.
      </p>
      <input
        type="email"
        name=""
        id=""
        placeholder="Your Email"
        className="w-[90%] h-[50px] border border-[#999999] rounded outline-none px-2"
      />
      <div className="flex self-start items-center justify-center flex-row gap-2">
        <button onClick={() => setAccept(!accpet)}>
          <div
            className={`w-4 h-4 rounded  ${
              accpet ? "bg-newGold" : "bg-white border border-[#767676]"
            }`}
          />
        </button>
        <p>I agree to the terms & conditions</p>
      </div>
      <button className="w-full h-[60px] bg-newGold rounded-full text-white text-sm font-medium uppercase">
        Subscribe
      </button>
    </div>
  );
};

export default BlogLeftBarSectionThree;
