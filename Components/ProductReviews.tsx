import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ProductReviews = () => {
  return (
    <div className="flex flex-col w-full lg:w-[45.7vw]">
      <div className="pb-5  border-b border-[#8A8A8A]">
        <p className="lg:text-4xl text-2xl text-black font-medium">
          Customer Reviews
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-start lg:items-center flex-col lg:flex-row justify-center gap-4">
            <Rater rating={4} total={5} interactive={false} />
            <p className="text-xs lg:text-xl font-normal text-black">
              Based on 1 review
            </p>
          </div>
          <button className="text-[#F00] text-base lg:text-xl font-medium">
            Write a review
          </button>
        </div>
      </div>
      <p className="lg:text-4xl text-2xl text-black font-medium mt-4">adadad</p>
      <div className="flex items-center justify-between">
        <p className="text-xs lg:text-xl font-normal text-black">
          Thai on Mar 26, 2022
        </p>
        <Rater rating={4} total={5} interactive={false} />
      </div>
      <p className="text-sm lg:text-base font-normal text-[#A5A5A5] mt-3">
        Designed by Hans J. Wegner in 1949 as one of the first models created
        especially for Carl Hansen & Son, and produced since 1950. The last of a
        series of chairs wegner designed based on inspiration from antique
        Chinese armchairs. The gently rounded top together with the back and
        seat offers a variety of comfortable seating positions,ideal for both
        long visits to the dining table and relaxed lounging.
      </p>
    </div>
  );
};

export default ProductReviews;
