"use client";
import React, { useState } from "react";
import BlogBodyItem from "./BlogBodyItem";
import IMG1 from "@/public/acc1.png";
import IMG2 from "@/public/acc2.png";
import IMG3 from "@/public/acc3.png";
import IMG4 from "@/public/acc4.png";
import IMG5 from "@/public/acc5.png";
import IMG6 from "@/public/acc6.png";

const BlogBody = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Adjust this as needed
  const data = [
    {
      img: IMG1,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      cat: "Accessories",
      id: 1,
      time: "March, 25 2022",
      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
    {
      img: IMG2,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      id: 2,

      time: "March, 25 2022",
      cat: "Accessories",

      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
    {
      img: IMG3,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      time: "March, 25 2022",
      id: 3,

      cat: "Accessories",

      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
    {
      img: IMG4,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      id: 4,

      cat: "Cameras",

      time: "March, 25 2022",
      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
    {
      img: IMG5,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      cat: "Accessories",
      id: 5,

      time: "March, 25 2022",
      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
    {
      img: IMG6,
      title: "Differences Between Good & Bad Phone were arranged",
      person: "Thai Nguyen",
      time: "March, 25 2022",
      id: 6,

      cat: "Cameras",

      desc: "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of...",
    },
  ];
  //   const pageCount = Math.ceil(data.length / itemsPerPage);

  //   // Create a function to handle page change
  //   const handlePageChange = ({ selected }: { selected: number }) => {
  //     setCurrentPage(selected);
  //   };
  //   const displayedData = data.slice(
  //     currentPage * itemsPerPage,
  //     (currentPage + 1) * itemsPerPage
  //   );

  return (
    <div className="w-[100vw] px-2 lg:px-0 lg:w-[76vw] flex items-center justify-center flex-col ">
      <div className="w-full flex flex-wrap gap-8">
        {data.map((item, index) => (
          <BlogBodyItem key={index} item={item} />
        ))}
      </div>
      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex items-center gap-4"
      /> */}
    </div>
  );
};

export default BlogBody;
