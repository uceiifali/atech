"use client";
import { optionProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import LastNavMobileSideBar from "./LastNavMobileSideBar";
import { AiOutlineMenu } from "react-icons/ai";

const LastNav = () => {
  const [selectedOption, setSelectedOption] = useState<
    optionProps | null | undefined
  >(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "SHOP", link: "/shop" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleChange = (selectedOption?: optionProps | null) => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
      <div className="w-[100vw] h-[8vh] lg:flex items-center  bg-black hidden  ">
        <Dropdown />
        <div className="flex items-center  ml-[9rem]  gap-9 w-full ">
          {Links.map((item, i) => (
            <Link key={i} href={item.link} className="text-white font-normal ">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-black flex items-center h-12 px-5 lg:hidden">
        <button className="" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <AiOutlineMenu className="text-white text-2xl" />
        </button>
      </div>
      <LastNavMobileSideBar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  );
};

export default LastNav;
