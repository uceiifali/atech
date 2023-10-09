import { menuProps, wishListProps } from "@/types";
import React, { useState } from "react";
import ReactModal from "react-modal";
import Dropdown from "./Dropdown";
import Link from "next/link";

const LastNavMobileSideBar = ({ isSidebarOpen, setSidebarOpen }: menuProps) => {
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const Links = [
    { name: "Home", link: "/" },
    { name: "SHOP", link: "/shop" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <ReactModal
      isOpen={isSidebarOpen}
      onRequestClose={closeSidebar}
      overlayClassName="overlay"
      className={`${
        isSidebarOpen
          ? "modal-content fixed top-0 right-0 bg-white rounded-md h-[100vh] md:w-[50vw] lg:w-[27vw]  w-[75vw]  flex items-center flex-col "
          : "modalClosed"
      }`}
    >
      <Dropdown />
      <div className="flex items-center justify-center h-full  gap-9 w-full flex-col ">
        {Links.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            onClick={() => setSidebarOpen(false)}
            className="text-black font-medium text-lg  "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </ReactModal>
  );
};

export default LastNavMobileSideBar;
