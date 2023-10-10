import ContactForm from "@/Components/ContactForm";
import ContactLeft from "@/Components/ContactLeft";
import Image from "next/image";
import React from "react";
import Map from "@/public/map.png";
const page = () => {
  return (
    <div className="flex justify-start flex-col gap-8">
      <div className="bg-[#F2F2F2] py-2 flex flex-col lg:flex-row items-center justify-around">
        <ContactLeft />
        <ContactForm />
      </div>
      <Image
        src={Map}
        alt="Map"
        className="object-cover lg:object-contain h-full w-full mb-12 "
      />
    </div>
  );
};

export default page;
