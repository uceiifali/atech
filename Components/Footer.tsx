import React from "react";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";

const Footer = () => {
  return (
    <div className="w-[100vw] flex items-center justify-center flex-col">
      <FooterOne />
      <FooterTwo />
      <FooterThree />
    </div>
  );
};

export default Footer;
