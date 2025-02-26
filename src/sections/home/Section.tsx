import React from "react";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <section className="w-full bg-zinc-950">
      <div className="relative w-full">
        <img
          src="img/hero5.jpg"
          className="object-cover object-bottom w-full h-[450px] md:h-[600px] lg:h-screen"
          alt=""
        />

        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <NavLink
            to={""}
            className="relative pb-2 text-zinc-950 text-lg after:content-[''] min-md:mt-[450px]  after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Shop Now
          </NavLink>
        </div>
      </div>

      <div className="py-5 flex justify-center md:hidden">
        <NavLink
          to={""}
          className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
        >
          Shop Now
        </NavLink>
      </div>
    </section>
  );
};

export default Section;
