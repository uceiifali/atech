import AboutActivity from "@/Components/AboutActivity";
import AboutBanner from "@/Components/AboutBanner";
import AboutBody from "@/Components/AboutBody";
import React from "react";

const about = () => {
  return (
    <div>
      <AboutBody />
      <AboutBanner />
      <AboutActivity />
    </div>
  );
};

export default about;
