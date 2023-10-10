import React from "react";
import SectionHeader from "./SectionHeader";

const ContactForm = () => {
  return (
    <div className="bg-white w-full lg:w-[65vw] lg:px-4 h-full mt-4 md:mt-0 lg:h-[80vh] py-8 rounded flex flex-col gap-5  justify-between px-2">
      <SectionHeader mark={"Get in Touch"} />
      <div className="w-full flex lg:items-center lg:justify-center flex-col lg:flex-row gap-4 lg:gap-8">
        <input
          type="text"
          placeholder="Name"
          className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 outline-none md:w-[98vw] w-[95vw] lg:w-[50vw] h-[60px] lg:h-[7vh]  rounded bg-[#F7F7F7]"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 outline-none md:w-[98vw] w-[95vw] lg:w-[50vw] h-[60px] lg:h-[7vh] rounded bg-[#F7F7F7]"
        />
      </div>

      <input
        name="text"
        placeholder="Comment"
        className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 md:w-[98vw] w-[95vw] outline-none lg:w-full h-[150px] lg:h-[40vh] rounded bg-[#F7F7F7]"
      />
      <button className="bg-newGold text-white text-sm font-medium w-[230px] h-[50px] rounded-full lg:self-start ">
        Submit comment
      </button>
    </div>
  );
};

export default ContactForm;
