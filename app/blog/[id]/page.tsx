import { BlogBodyByIdProps } from "@/types";
import React from "react";
import BlogBanner from "@/public/BlogBanner.png";
import BlogBanner2 from "@/public/BlogBanner1.png";
import BlogBanner3 from "@/public/BlogBanner2.png";
import Image from "next/image";
import BlogDesc from "@/Components/BlogDesc";
import BlogComment from "@/Components/BlogComment";
const page = ({ params }: { params: BlogBodyByIdProps }) => {
  const colors = [
    { color: "#2D88FF" },
    { color: "#0ECAE6" },
    { color: "#0084C8" },
    { color: "#E60023" },
    { color: "#4B6778" },
    { color: "#46B7E3" },
    { color: "#33D84B" },
  ];
  return (
    <div className="flex  flex-col mt-8 px-10 w-[100vw]  lg:w-[100vw] gap-8 ">
      <Image
        src={BlogBanner}
        alt="BlogBanner"
        className="lg:object-cover object-contain w-full  h-full lg:h-[75vh] "
      />
      <BlogDesc />
      {/* Secound Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <Image
          src={BlogBanner2}
          alt="blog"
          className="object-contain w-[500px] h-full lg:h-[550px]"
        />
        <Image
          src={BlogBanner3}
          alt="blog"
          className="object-contain w-[500px] h-full lg:h-[550px]"
        />
      </div>
      {/* Third Section */}
      <p className="font-normal text-sm lg:text-base text-[#666] leading-7">
        For me, the most important part of improving at photography has been
        sharing it. Sign up for an Exposure account, or post regularly to
        Tumblr, or both. Tell people you’re trying to get better at photography.
        Talk about it. When you talk about it, other people get excited about
        it. They’ll come on photo walks with you.
      </p>
      <p className="font-normal text-sm lg:text-base text-[#666] leading-7">
        Staying locked up in four walls have restricted our thinking. I feel
        like our limited thinking echoes through this wall. We are so used to
        schedules and predictable life that we have successfully suppressed our
        creative side. When you step out of these four walls on a peaceful
        morning, you realize how much nature has to offer to you. Its boundless.
        Your thoughts, worries, deadlines won’t resonate here.
      </p>
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4 lg:gap-0 w-full border-b border-[#EBEBEB] pb-8">
        <div className="bg-newBlack px-3 py-1 flex items-center justify-center rounded-full ">
          <p className="text-white text-sm font-normal">Electronic</p>
        </div>
        <div className="flex flex-row gap-2">
          {colors?.map((item) => (
            <div
              key={item.color}
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      </div>
      <BlogComment />
    </div>
  );
};

export default page;
