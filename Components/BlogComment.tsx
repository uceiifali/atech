import React from "react";

const BlogComment = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 lg:gap-12 ">
      <h1 className="lg:text-4xl text-3xl font-semibold text-newBlack">
        Leave a comment
      </h1>
      <div className="w-full flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-8">
        <input
          type="text"
          placeholder="Name"
          className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 outline-none w-[95vw] lg:w-[50vw] h-[60px] lg:h-[8vh]  rounded"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 outline-none w-[95vw] lg:w-[50vw] h-[60px] lg:h-[8vh] rounded"
        />
      </div>
      <input
        name="text"
        placeholder="Comment"
        className="border border-[#DDD] text-[#666] text-sm font-normal px-4 py-1 outline-none w-[95vw] h-[60px] lg:h-[15vh] rounded"
      />
      <button className="bg-newGold text-white text-sm font-medium w-[230px] h-[50px] rounded-full lg:self-start ">
        Submit comment
      </button>
    </div>
  );
};

export default BlogComment;
