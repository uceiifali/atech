import React from "react";

const FooterOne = () => {
  return (
    <div className="w-[100vw] bg-black flex items-center justify-center flex-col py-8 mt-4 gap-5">
      <p className="text-[26px] text-white font-medium">
        Subscribe to get information
      </p>
      <div className="flex items-center justify-center flex-row">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Email Adress..."
          className="bg-[#FFF] w-[249px] h-[45px] rounded text-sm text-[#999999] p-2 outline-none pr-8 border-none"
        />
        <button className="w-[125px] h-[45px] bg-newGold text-white text-xs font-semibold rounded -ml-3">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default FooterOne;
