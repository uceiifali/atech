import AboutActivity from "@/Components/AboutActivity";
import AboutBanner from "@/Components/AboutBanner";
import AboutBody from "@/Components/AboutBody";
import AboutMissionVission from "@/Components/AboutMissionVission";
import React from "react";

const about = () => {
  return (
    <div className="py-4">
      <AboutBody />
      <AboutBanner />
      <AboutActivity />
      <AboutMissionVission />
    </div>
  );
};

export default about;
