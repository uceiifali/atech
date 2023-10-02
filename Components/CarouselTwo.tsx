import React from "react";
import Image from "next/image";
import Product from "../public/phone1.png";
import Product11 from "../public/phon1-1.png";
import Product12 from "../public/phone1-2.png";
import Product13 from "../public/phone1-3.png";
import Product14 from "../public/phone1-4.png";
import Product15 from "../public/phone1-5.png";
const CarouselTwo = () => {
  return (
    <div className="lg:w-[73vw] w-[99vw] rounded-md h-[700px] lg:h-[500px] relative p-4 flex items-center justify-center bg-fixed bg-center bg-no-repeat flex-col lg:flex-row	bg-cover bg-slide2">
      <div className="lg:w-[40vw] w-full flex items-center lg:items-start justify-center lg:justify-between flex-col lg:px-8 py-4">
        <div className="flex items-center justify-center lg:items-start flex-col gap-2 logoAnimate">
          <Image
            alt="ace "
            src={"/ace.png"}
            width={35}
            height={10}
            className="object-contain"
          />
        </div>
        <p className="text-white uppercase font-light text-base lg:text-5xl w-full lg:w-[15vw] py-3 text-center lg:text-left TextAnimate">
          URBAN 2 HIT THE GROUND
        </p>
        <p className="text-white uppercase font-normal text-base lg:leading-loose pb-3 w-[50vw] lg:w-[30vw] DescAnimate text-center lg:text-left">
          The Urban 2 has an extraordinary design. Which comes in four degrade
          colors that will satisfy everyone's tastes
        </p>
        <button className="w-[40vw] lg:w-[13vw] h-[4vh] lg:h-[7vh] bg-white rounded  text-base font-semibold py-5 flex items-center justify-center buttonAnimation">
          Get it Now
        </button>
      </div>
      <div className="flex items-center w-full lg:w-[50vw] h-[400px]  justify-center  lg:justify-end  flex-row relative">
        <Image
          src={Product15}
          alt="product1"
          className="object-contain photoSlide4 hidden lg:flex  w-[146.276px] h-[40vh]  absolute right-[26vw] z-20"
          priority={false}
        />
        <Image
          src={Product14}
          alt="product1"
          className="object-contain photoSlide3 hidden lg:flex  w-[146.276px] h-[40vh]  absolute right-[21.5vw] z-20"
          priority={false}
        />
        <Image
          src={Product13}
          alt="product1"
          className="object-contain photoSlide2 hidden lg:flex  w-[146.276px] h-[40vh]  absolute right-[17vw] z-20"
          priority={false}
        />
        <Image
          src={Product12}
          alt="product1"
          className="object-contain photoSlide hidden lg:flex   w-[146.276px] h-[40vh]  absolute right-[12.5vw] z-20"
          priority={false}
        />
        <div className=" items-center justify-evenly flex-row flex  mobileAnimation absolute z-30 lg:right-2">
          <Image
            src={Product}
            alt="product1"
            className="object-contain  w-[126.276px] h-[40vh]  "
            priority={false}
          />
          <Image
            src={Product11}
            alt="product1"
            className="object-contain   w-[126.276px] h-[40vh]  "
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
