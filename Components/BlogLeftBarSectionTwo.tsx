import React from "react";
import SectionHeader from "./SectionHeader";
import BlogImage1 from "@/public/blogLeft1.png";
import BlogImage2 from "@/public/BlogLeft2.png";
import BlogLeftBarSectionTwoItem from "./BlogLeftBarSectionTwoItem";
const BlogLeftBarSectionTwo = () => {
  const data = [
    {
      title: "Features To Look For On Camera",
      image: BlogImage1,
      date: "Mar 11 2022",
    },
    {
      title: "Tips on How to choose the b...",
      image: BlogImage2,
      date: "Mar 10 2022",
    },
  ];
  return (
    <div>
      <SectionHeader mark={"Latest post"} />
      {data.map((item) => (
        <BlogLeftBarSectionTwoItem item={item} />
      ))}
    </div>
  );
};

export default BlogLeftBarSectionTwo;
