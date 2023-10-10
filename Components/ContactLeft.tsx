import React from "react";
import Image from "next/image";
import Atech from "@/public/mission.png";

const ContactLeft = () => {
  return (
    <div className="bg-white px-2 pb-3  flex md:items-start items-center lg:items-center justify-center flex-col w-full lg:w-[30vw] rounded lg:h-[80vh]">
      <Image
        src={Atech}
        alt="atech logo"
        className="md:object-cover object-contain lg:object-contain w-full h-[320px] "
      />
      <div className="flex flex-col gap-2">
        <p className="text-base font-normal text-black">asamy@atech-uae.com</p>
        <p className="text-lg font-semibold text-black">(+00) 0508408987</p>
        <p className="text-sm text-[#666] font-normal">
          Add: Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba,
          Dubai, U.A.E.
        </p>
        <p className="text-sm text-[#666] font-normal">
          Fax: (+00) 000 000 000
        </p>
        <p className="text-sm text-[#666] font-normal">
          Monday – Friday: 9:00-20:00
        </p>
        <p className="text-sm text-[#666] font-normal">
          Email: asamy@atech.uae.com
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
