import BlogBody from "@/Components/BlogBody";
import BlogLeftBar from "@/Components/BlogLeftBar";
import PathTracker from "@/Components/PathTracker";
import React from "react";

const page = () => {
  return (
    <div>
      <PathTracker path={"Blog"} />
      <div className="flex items-start justify-center">
        <BlogLeftBar />
        <BlogBody />
      </div>
    </div>
  );
};

export default page;
