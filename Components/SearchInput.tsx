import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center border-2 border-[#E1E1E1] rounded-full w-full lg:w-[45vw] h-[3.5rem] ">
      <div className="text-[9px] pl-2 text-black border-r-2 border-newGray pr-4 font-medium w-[25%]  lg:w-[10vw] flex items-center justify-center">
        All Categories
      </div>
      <input
        type="text"
        placeholder="Search for products ..."
        className="lg:w-[45vw] w-[55%] ml-2 border-0 outline-0  h-full text-sm text-newGray font-normal"
      />
      <button className="bg-[#CA7400] h-[3.5rem] w-[20%] lg:w-[8vw] text-white text-sm lg:text-base font-medium rounded-r-full ">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
