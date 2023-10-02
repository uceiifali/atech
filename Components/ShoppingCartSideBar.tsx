import { shoppingCartProps } from "@/types";
import Image from "next/image";
import React from "react";
import ReactModal from "react-modal";
const ShoppingCartSideBar = ({
  isShoppingCartOpen,
  setShoppingCartOpen,
}: shoppingCartProps) => {
  const openSidebar = () => {
    setShoppingCartOpen(true);
  };

  const closeSidebar = () => {
    setShoppingCartOpen(false);
  };
  return (
    <ReactModal
      isOpen={isShoppingCartOpen}
      onRequestClose={closeSidebar}
      overlayClassName="overlay"
      className={`${
        isShoppingCartOpen
          ? "modal-content modal-content fixed top-0 right-0 bg-white rounded-md h-screen lg:w-[27vw] w-[70vw]  md:w-[50vw]  flex items-center flex-col "
          : "modalClosed"
      }`}
    >
      <div className="h-[15vh] w-full bg-[#F5F5F5] flex items-center px-4 ">
        <p className="text-[#222] text-sm lg:text-base font-medium flex items-center justify-center gap-1">
          Shopping cart
          <div className="w-4 h-4 rounded-full bg-newGold text-white text-xs flex items-center justify-center">
            <p>0</p>
          </div>
        </p>
      </div>
      <div className="flex items-center justify-center flex-col my-8 gap-5  h-[75vh]">
        <Image
          src={"/cartEmpty.png"}
          alt="cartEmpty"
          width={142}
          height={102}
        />
        <p className="text-[#222] text-base font-medium">Wishlist is empty.</p>
        <button className="my-10 px-4 flex items-center justify-center  bg-newGold rounded w-[62vw] md:w-[45vw] lg:w-[22vw] h-[8vh] text-white text-base font-medium">
          Return to shop
        </button>
      </div>
      <div className="h-[35%] border-t border-newGray w-full px-3 lg:w-[20vw]  ">
        <div className="w-full flex items-center justify-between pt-3 flex-row">
          <p>Total</p>
          <p>$0.00</p>
        </div>
        <button className="my-5 px-4 flex items-center justify-center  bg-[#F6F6F6] rounded-full w-full lg:w-[22vw] h-[8vh] text-black text-base font-medium ">
          View cart
        </button>
        <button className="my-5 px-4 flex items-center justify-center  bg-newGold rounded-full w-full lg:w-[22vw] h-[8vh] text-white text-base font-medium ">
          Check Out
        </button>
      </div>
      <div className="bg-[#555] flex items-center justify-center w-full lg:w-[27vw] h-[15vh]">
        <p className="text-white">Spend $500.00 to Free Shipping</p>
      </div>
    </ReactModal>
  );
};

export default ShoppingCartSideBar;
