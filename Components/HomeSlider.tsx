"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";

const HomeSlider = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prevActiveCarousel) => {
        // If the current activeCarousel is 3, reset it to 1; otherwise, increment it.
        return prevActiveCarousel === 3 ? 1 : prevActiveCarousel + 1;
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handlePaginationClick = (carouselNumber: number) => {
    setActiveCarousel(carouselNumber);
  };

  return (
    <div className="relative m-3">
      {activeCarousel === 1 && <Carousel />}
      {activeCarousel === 2 && <CarouselTwo />}
      {activeCarousel === 3 && <CarouselThree />}
      <div className="absolute bottom-[2vh] lg:bottom-[5vh] flex items-center justify-center flex-row gap-3 left-[38vw] md:left-[45vw] lg:left-[28vw]">
        <button onClick={() => handlePaginationClick(1)}>
          <div
            className={`w-3 h-3 rounded-full ${
              activeCarousel === 1
                ? "bg-transparent border-2 border-white"
                : "bg-[#ffffff80]"
            }`}
          />
        </button>
        <button onClick={() => handlePaginationClick(2)}>
          <div
            className={`w-3 h-3 rounded-full ${
              activeCarousel === 2
                ? "bg-transparent border-2 border-white"
                : "bg-[#ffffff80]"
            }`}
          />
        </button>
        <button onClick={() => handlePaginationClick(3)}>
          <div
            className={`w-3 h-3 rounded-full ${
              activeCarousel === 3
                ? "bg-transparent border-2 border-white"
                : "bg-[#ffffff80]"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
