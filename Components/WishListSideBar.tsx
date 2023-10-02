import { wishListProps } from "@/types";
import React, { useState } from "react";
import ReactModal from "react-modal";

const WishListSideBar = ({ isSidebarOpen, setSidebarOpen }: wishListProps) => {
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <ReactModal
      isOpen={isSidebarOpen}
      onRequestClose={closeSidebar}
      overlayClassName="overlay"
      className={
        isSidebarOpen
          ? "modal-content fixed top-0 right-0 bg-white rounded-md h-[100vh] md:w-[50vw] lg:w-[27vw]  w-[65vw]  flex items-center flex-col "
          : "modalClosed"
      }
    >
      <div className="h-[8vh] w-full bg-[#F5F5F5] flex items-center px-4">
        <p className="text-[#222] text-base font-medium">Wishlist</p>
      </div>
      <button className="my-10 px-4 flex items-center justify-center  bg-newGold rounded w-[50vw] lg:w-[22vw] h-[8vh] text-white text-base font-medium">
        View Wishlist
      </button>
      <p className="text-[#222] text-base font-medium">Wishlist is empty.</p>
    </ReactModal>
  );
};

export default WishListSideBar;
