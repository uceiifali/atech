import React from "react";
import SectionHeader from "./SectionHeader";
import DealsOfTheDayItem from "./DealsOfTheDayItem";

const DealsOfTheDaySection = () => {
  return (
    <div className="lg:h-[500px]  w-[100vw] h-full  px-1 lg:px-9  ">
      <SectionHeader mark="Deals" title="Of The Day" />
      <div className="flex items-center flex-col lg:flex-row justify-center">
        <DealsOfTheDayItem />
        <DealsOfTheDayItem />
      </div>
    </div>
  );
};

export default DealsOfTheDaySection;
