import AboutActivity from "@/Components/AboutActivity";
import AboutBanner from "@/Components/AboutBanner";
import AboutBody from "@/Components/AboutBody";
import AboutMissionVission from "@/Components/AboutMissionVission";
import React from "react";

const about = () => {
  return (
    <div>
      <AboutBody />
      <AboutBanner />
      <AboutActivity />
      <AboutMissionVission />
    </div>
  );
};

export default about;
