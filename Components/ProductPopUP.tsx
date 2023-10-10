import { wishListProps } from "@/types";
import Image from "next/image";
import React from "react";
import ReactModal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ProductPopUP = ({
  isSidebarOpen,
  setSidebarOpen,
  product,
}: wishListProps) => {
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="">
      <ReactModal
        isOpen={isSidebarOpen}
        onRequestClose={closeSidebar}
        overlayClassName="overlay"
        className={
          isSidebarOpen
            ? "modal-product fixed top-5 left-5 lg:left-[25%] p-7   bg-white rounded-md h-[95vh] md:w-[95vw] w-[90vw] lg:w-[50vw]  flex items-center flex-col   "
            : "modalClosedProduct"
        }
      >
        <button
          onClick={() => closeSidebar()}
          className="flex items-center justify-center  absolute right-4 top-4"
        >
          <AiOutlineCloseCircle className="text-2xl" />
        </button>
        {product && (
          <Image
            src={product}
            alt="product"
            className="object-contain h-[90vh] w-full"
          />
        )}
      </ReactModal>
    </div>
  );
};

export default ProductPopUP;
