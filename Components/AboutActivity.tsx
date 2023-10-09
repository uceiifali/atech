import React from "react";
import Img from "@/public/act1.png";
import Img2 from "@/public/act2.png";
import Img3 from "@/public/act3.png";
import AboutActivityItem from "./AboutActivityItem";
const AboutActivity = () => {
  const data = [
    {
      logo: Img,
      id: 0,
      title: "Wholesale of household appliances",
      desc: "Wholesale of household appliances refers to the business of selling large quantities of household appliances to retailers, distributors, or other businesses that sell directly to consumers. Household appliances may include refrigerators, washing machines, dryers, ovens, microwaves, dishwashers, and other electronics that are commonly used in homes.",
    },
    {
      logo: Img2,
      id: 1,

      title: "Retail sale of any kind of product over the internet",
      desc: "As we continue to navigate an ever-evolving digital landscape, the retail sale of any kind of product over the internet has become an increasingly important aspect of our business. At “Atech”, we're committed to providing our customers with a seamless and enjoyable online shopping experience, no matter what product they may be looking for.",
    },
    {
      logo: Img3,
      id: 2,

      title: "Mobile Phones & Accessories Trading",
      desc: "At   we're proud to offer a wide range of mobile phones and accessories to meet the needs of our customers. Whether you're looking for the latest smartphone or a protective case to keep your device safe, we've got you covered.",
    },
  ];
  return (
    <div className="bg-[#F6F7F9] flex items-center justify-center flex-col">
      <p className="text-4xl font-semibold text-newBlack">ATECH ACTIVITY</p>
      <p className="text-base text-[#909090] font-medium w-[80vw]">
        ATECH is a company that is striving to become a top player in the
        trading industry by meeting the demands of customers in North Africa and
        the Middle East. The company offers a diverse range of goods to ensure
        its success and profitability. Its primary focus is on trading home
        appliances.
      </p>
      <div className="flex flex-row  items-center justify-around w-full">
        {data.map((item) => (
          <AboutActivityItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default AboutActivity;
