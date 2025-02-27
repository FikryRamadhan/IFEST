import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-0 ">
        <div className="bg-blue-500">
          <img
            src="img/satu.jpg"
            className="h-[160px] object-cover md:h-[300px] min-sm:w-full w-full lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="img/hero1.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:w-[300px] md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="img/hero2.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="">
          {" "}
          <img
            src="img/hero3.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-4 row-start-2 ">
          {" "}
          <img
            src="img/hero1.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-1 row-start-2">
          {" "}
          <img
            src="img/hero2.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-1 row-start-3 ">
          {" "}
          <img
            src="img/satu.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-2 row-start-3">
          {" "}
          <img
            src="img/hero1.jpg"
            className="h-[160px] md:w-[300px]  object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-3 row-start-3">
          {" "}
          <img
            src="img/hero2.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-start-4 row-start-3">
          {" "}
          <img
            src="img/hero3.jpg"
            className="h-[160px] object-cover min-sm:w-full w-full md:h-[300px] lg:w-[351px] lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-2 bg-gray-100">
          <div className=" flex flex-col items-center justify-center h-full">
            <h1 className="text-center md:text-2xl lg:text-6xl ">
              Gaya Baru <br />
              Fashion Lama
            </h1>
            <button className="lg:block hidden md:block md:mt-3 lg:mt-6 border text-lg hover:bg-zinc-950 hover:text-white  border-zinc-900 py-3 px-10">
              Beli Sekarang
            </button>
          </div>
        </div>

        <div className="col-span-4 row-start-4 py-6 flex justify-center md:hidden lg:hidden">
          <NavLink
            to={""}
            className="relative lg:ml-1 pb-2 text-zinc-900 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Beli Sekarang
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
