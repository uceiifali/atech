import React from "react";
import HomeSlider from "./HomeSlider";
import HomeBannerItem from "./HomeBannerItem";
import CristorLogo from "@/public/cristorWhite.png";
import Product1 from "@/public/bannerItem1.png";
import Product2 from "@/public/bannerItem2.png";
import Product3 from "@/public/bannerItem3.png";
const HomeBannerSection = () => {
  const data = [
    {
      logo: CristorLogo,
      sale: "Big Sale Up To 40% Off",
      cat: "Tablet & Accessories",
      product: Product1,
      bgColor: "bg-[#1960AE]",
    },
    {
      logo: CristorLogo,
      sale: "Big Sale Up To 40% Off",
      cat: "Tablet & Accessories",
      product: Product2,
      bgColor: "bg-[#E20856]",
    },
    {
      logo: CristorLogo,
      sale: "Big Sale Up To 40% Off",
      cat: "Tablet & Accessories",
      product: Product3,
      bgColor: "bg-[#8910CF]",
    },
  ];
  return (
    <div className="flex items-center lg:flex-row flex-col   ">
      <HomeSlider />
      <div className="flex flex-col  items-center justify-between h-[500px]">
        {data?.map((item, i) => (
          <HomeBannerItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeBannerSection;
