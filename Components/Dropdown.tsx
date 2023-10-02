import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const data = [
    { name: "Laptop & Computer" },
    { name: "TVs & Audios" },
    { name: "Headphones" },
    { name: "Prints & lnk" },
    { name: "Home Threaters" },
    { name: "PC Components" },
    { name: "Ultrabooks" },
    { name: "Smartwatches" },
    { name: "Cameras & Photography" },
    { name: "Smart Phones & Consoles" },
    { name: "Video Games & Consoles" },
  ];
  return (
    <div className="lg:ml-8 mt-5 lg:mt-0 relative">
      <button
        className="bg-newGold w-[55vw] md:w-[45vw] lg:w-[23vw] h-[8vh] rounded text-white font-medium uppercase text-sm"
        onClick={() => setOpen(!open)}
      >
        Shop By Department
      </button>
      {open && (
        <div className="absolute bg-white shadow-xl p-4 w-[55vw] md:w-[45vw] lg:w-[23vw] mt-2 border border-newGray z-50  ">
          <div className="w-4 h-4 bg-white border-t border-l border-newGray absolute -top-2 left-[2rem] rotate-45 z-50" />
          {data.map((itme, i) => (
            <p
              className="text-newGray text-sm font-normal border-b border-[#E1E1E1] py-2"
              key={i}
            >
              {itme.name}
            </p>
          ))}
          <p className="text-black text-base  font-medium text-center  py-2">
            More Categories
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
