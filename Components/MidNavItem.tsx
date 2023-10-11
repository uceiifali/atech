import { menuItemProps } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

const MidNavItem = ({
  logo,
  title,
  desc,
  badge,
  link,
  onClick,
}: menuItemProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (link) {
      router.push(`${link}`);
    } else if (onClick) {
      onClick(true);
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center justify-center w-[30vw]  lg:w-[9vw] h-[10vh] gap-3 px-2 "
    >
      <div className="lg:w-[4rem] w-[2rem] h-[2rem] lg:h-[2.5rem] flex border-2 border-[#E6E6E6] rounded-full items-center justify-center relative">
        {logo}
        {badge !== undefined && badge !== null && (
          <div className="w-4 h-4 bg-[#CA7400] absolute -top-2 -right-2 lg:-top-1 lg:-right-1 flex items-center justify-center rounded-full">
            <p className="text-xs text-white">{badge}</p>
          </div>
        )}
      </div>
      <div className="flex items-start justify-center flex-col w-[120px] h-[50px] ">
        <p className="text-[8px] md:text-[11px] lg:text-xs text-black font-medium">
          {title}
        </p>
        <p className="text-[8px] md:text-[10px]  text-newGray font-medium">
          {desc}
        </p>
      </div>
    </button>
  );
};

export default MidNavItem;
