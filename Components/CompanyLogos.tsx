import React from "react";
import Condor from "@/public/condor2.png";
import Nardi from "@/public/nardiLogo2.png";
import Cristor from "@/public/cristorRed.png";
import Ace from "@/public/ace2.png";
import Image from "next/image";
const CompanyLogos = () => {
  const logos = [
    { name: "Conder", logo: Condor },
    { name: "Nardi", logo: Nardi },
    { name: "Cristor", logo: Cristor },
    { name: "Ace", logo: Ace },
  ];
  return (
    <div className="flex items-center py-2 lg:py-12 justify-center flex-col w-[100vw] gap-12  lg:h-[10vh]  lg:flex-row">
      {logos.map((item) => (
        <Image
          src={item.logo}
          alt={item.name}
          key={item.name}
          width={155}
          height={40}
          className=" object-contain "
        />
      ))}
    </div>
  );
};

export default CompanyLogos;
