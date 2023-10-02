"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import MidNavItem from "./MidNavItem";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import WishListSideBar from "./WishListSideBar";
import ShoppingCartSideBar from "./ShoppingCartSideBar";
import Link from "next/link";
const MidNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);

  return (
    <div className="py-3 gap-4 lg:gap-0 lg:h-[15vh] flex-col lg:flex-row  flex items-center justify-between px-4">
      <Link href={"/"}>
        <Image
          src={"/atechLogo.png"}
          alt="atechLogo"
          width={235}
          height={51}
          className="object-contain"
        />
      </Link>
      <SearchInput />
      <div className="flex items-center justify-center flex-row gap-4 ">
        <MidNavItem
          logo={<BsFillPersonFill size={25} color="#000" />} // Wrap the icon in JSX
          title={"Hello,Sign In"}
          desc={"Login / Register"}
          link={"/account"}
        />
        <MidNavItem
          logo={<AiFillHeart size={25} color="#000" />} // Wrap the icon in JSX
          title={"Favorite"}
          desc={"My Wishlist"}
          badge={0}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />
        <MidNavItem
          logo={<AiFillShopping size={25} color="#000" />} // Wrap the icon in JSX
          title={"Your Cart:"}
          desc={"$0.00"}
          badge={0}
          onClick={() => setShoppingCartOpen(!isShoppingCartOpen)}
        />
      </div>
      <WishListSideBar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <ShoppingCartSideBar
        isShoppingCartOpen={isShoppingCartOpen}
        setShoppingCartOpen={setShoppingCartOpen}
      />
    </div>
  );
};

export default MidNav;
