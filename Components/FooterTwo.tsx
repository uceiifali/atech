import React from "react";
import AtechLogo from "@/public/atechLogo.png";
import Image from "next/image";
import Link from "next/link";
const FooterTwo = () => {
  const data = [
    {
      name: "Community",
      child: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Shop",
          link: "/shop",
        },
        {
          name: "About us",
          link: "/about",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Contact us",
          link: "/contact",
        },
      ],
    },
    {
      name: "Service links",
      child: [
        {
          name: "Delivery",
          link: "/delivery",
        },
        {
          name: "Fasters delivery",
          link: "/fasters",
        },
      ],
    },
    {
      name: "Support",
      child: [
        {
          name: "Help center",
          link: "/help",
        },
        {
          name: "Terms of service",
          link: "/terms",
        },
        {
          name: "Card",
          link: "/card",
        },
        {
          name: "Privacy policy",
          link: "/privacy",
        },
      ],
    },
    {
      name: "Contact",
      child: [
        {
          name: "Call us : 0508408987",
          link: "",
        },
        {
          name: "Email us : asamy@atech-uae.com",
          link: "",
        },
      ],
    },
  ];
  return (
    <div className="w-[100vw] flex items-center lg:items-start h-full lg:h-[200px] justify-center gap-4 flex-col lg:flex-row px-4 py-2 ">
      <div className="w-full lg:w-1/3 px-4  flex items-start justify-start flex-col">
        <Image
          src={AtechLogo}
          className="object-contain w-[219.263px] h-[79.368px]"
          alt="AtechLogo"
        />
        <p className="text-base text-[#676767] font-normal">
          ATECH is looking to be one of the leading companies in trading by
          providing the commodity required by customers in North Africa and the
          middle east.
        </p>
      </div>
      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-center lg:items-start lg:justify-start w-full lg:w-1/4 flex-row py-2"
        >
          <div className="w-full flex-col flex items-start justify-start">
            <p className="text-base font-semibold text-black">{item.name}</p>
            <div className="flex flex-col gap-2">
              {item?.child?.map((link, i) =>
                link?.link ? ( // Use optional chaining here
                  <Link
                    href={link.link}
                    key={i}
                    className="text-base text-[#6C6C6C] font-normal"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <p className="text-base text-[#6C6C6C] font-normal" key={i}>
                    {link?.name}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTwo;
