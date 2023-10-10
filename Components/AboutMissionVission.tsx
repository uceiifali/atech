import React from "react";
import AboutMissionVissionItem from "./AboutMissionVissionItem";
import Vision from "@/public/vission.png";
import Mission from "@/public/mission.png";
const AboutMissionVission = () => {
  const data = [
    {
      img: Vision,
      title: "OUR VISION",
      desc: "Our vision is to empower every entity in the world to obtain more. We pursue to create local opportunity, growth, and impact in every country around the world. Our strategy is to build unique platforms and productivity trading by offering products according to International ",
    },
    {
      img: Mission,
      title: "OUR MISSION ",
      desc: "Our mission is to organize trading services and make them accessible and beneficial.",
    },
  ];
  return (
    <div className="flex items-center lg:items-start justify-around w-[100vw] py-5 flex-col lg:flex-row">
      {data.map((item) => (
        <AboutMissionVissionItem item={item} key={item.title} />
      ))}
    </div>
  );
};

export default AboutMissionVission;
