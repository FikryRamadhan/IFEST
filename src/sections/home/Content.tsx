import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="lg:w-full bg-black py-14 md:px-10 lg:px-14 px-4">
        <h1 className="lg:text-4xl md:ml-4 md:text-4xl text-2xl text-white mb-8">
          Shop by Category
        </h1>
        <div className="grid grid-cols-2 gap-6 items-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-left md:px-5 ">
            <img
              src="img/satu.jpg"
              className="mb-6 w-full md:w-96"
              alt="Shop Best Sellers"
            />
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Best Sellers
            </NavLink>
          </div>
          <div className="text-left md:px-5">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="Shop Pants" />
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Pants
            </NavLink>
          </div>
          <div className="text-left md:px-5">
            <img
              src="img/satu.jpg"
              className="mb-6 w-full"
              alt="Shop Tops & Tees"
            />
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Tops & Tees
            </NavLink>
          </div>
          <div className="text-left md:px-5">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="Shop All" />
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop All
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
