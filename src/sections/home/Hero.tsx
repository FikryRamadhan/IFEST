import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="32 grid grid-cols-4 grid-rows-3 gap-0 ">
        <div className="bg-blue-500">
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-4 row-start-2 ">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-1 row-start-2">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-1 row-start-3 ">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-2 row-start-3">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-3 row-start-3">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-4 row-start-3">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-2 bg-gray-100">
          <div className=" flex flex-col items-center justify-center h-full">
            <h1 className="text-center lg:text-6xl ">
              The Freedom Of <br />
              fewer pieces
            </h1>
            <button className="lg:block hidden lg:mt-6 border text-lg hover:bg-zinc-950 hover:text-white  border-zinc-900 py-3 px-10">
              Shop The Foundation
            </button>
          </div>
        </div>

        <div className="col-span-4 row-start-4 py-6 flex justify-center lg:hidden">
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-900 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Shop The Foundation
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
