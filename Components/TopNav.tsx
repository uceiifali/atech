import Link from "next/link";
import React from "react";

const TopNav = () => {
  const links = [
    { name: "My Account", link: "/account" },
    { name: "Wish List", link: "/wishlist" },
    { name: "Shpping Cart", link: "/shoppingcart" },
    { name: "Checkout", link: "/checkout" },
  ];
  return (
    <div className="max-w-[1440px] flex items-center justify-around mt-2">
      <div className="lg:flex items-center justify-start gap-4 h-8 w-[80vw] hidden">
        {links.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="border-r-2 pr-4 text-newGray text-sm md:text-base"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="border-r-2 pr-4 text-newGray text-sm md:text-base">
          EGP
        </button>
        <button className=" text-newGray text-sm md:text-base">AR</button>
      </div>
    </div>
  );
};

export default TopNav;
