import React from "react";
import BlogLeftBarSection from "./BlogLeftBarSection";
import BlogLeftBarSectionTwo from "./BlogLeftBarSectionTwo";
import BlogLeftBarSectionThree from "./BlogLeftBarSectionThree";

const BlogLeftBar = () => {
  return (
    <div className="p-4 w-[23vw] lg:flex flex-col gap-8 hidden ">
      <BlogLeftBarSection />
      <BlogLeftBarSectionTwo />
      <BlogLeftBarSectionThree />
    </div>
  );
};

export default BlogLeftBar;
