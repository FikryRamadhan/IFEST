import React from "react";
import { Link, NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="">
        <div className="w-full flex flex-col lg:py-16 lg:flex-row lg:items-center lg:px-20 gap-10 bg-zinc-900">
          <div className="lg:w-1/2 w-full">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full px-4 lg:px-0 mb-10 lg:mt-0 text-left lg:text-left">
            <h1 className="lg:text-5xl text-3xl mb-6 lg:mb-6 text-white ">
              Modern shapes that move with you.
            </h1>
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Pants
            </NavLink>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:px-20 gap-10 bg-zinc-900">
          <div className="lg:w-1/2 w-full text-left lg:text-left mb-10 px-4 lg:px-0">
            <h1 className="lg:text-5xl lg:mb-6 mb-6  text-3xl text-white ">
              Modern shapes that move with you.
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Tops
            </NavLink>
          </div>
          <div className="lg:w-1/2 w-full lg:py-16 ">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:px-20 gap-10 bg-zinc-900">
          <div className="lg:w-1/2 w-full lg:py-16">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 px-4 w-full text-left lg:text-left mb-10">
            <h1 className="lg:text-5xl mb-6  lg:mb-6 text-3xl text-white">
              Modern shapes that move with you.
            </h1>
            <NavLink
              to={""}
              className="relative lg:ml-1 pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Pants
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
