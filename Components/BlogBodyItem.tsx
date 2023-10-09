import React from "react";
import IMG from "@/public/acc1.png";
import Image from "next/image";
import { BlogBodyItemProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogBodyItem = ({ item }: { item: BlogBodyItemProps }) => {
  const router = useRouter();

  return (
    <div className="relative w-[100vw] lg:w-[560px]  flex items-start justify-center gap-4 flex-col">
      <div className="absolute left-6 top-4  bg-newGold px-4 rounded-md py-1">
        <p className="text-sm font-normal text-white">{item.cat}</p>
      </div>
      <Image
        src={item.img}
        alt="IMG"
        className="lg:object-cover object-cover w-[100vw] lg:w-[560px] h-[320px] rounded-2xl"
      />
      <h1 className="text-lg font-medium text-[#222]">{item.title}</h1>
      <p className="text-sm font-normal text-[#666]">
        Post by <span className="text-newGold"> {item.person}</span> {item.time}
      </p>
      <p className="text-sm font-normal text-[#666]">
        {item.desc.substring(0, 100)}
      </p>
      <div className="w-full h-[1px] bg-[#E5E5E5]" />
      <button
        className="bg-[#F6F6F6] border border-[#EBEBEB] text-[#222] font-semibold text-sm w-40 h-16 rounded-full"
        onClick={() => router.push(`/blog/${item.id}`)}
      >
        Read More
      </button>
    </div>
  );
};

export default BlogBodyItem;
