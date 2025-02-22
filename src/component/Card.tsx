import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="w-full bg-slate-950 py-14 px-14">
        <h1 className="text-4xl text-white mb-8">Shop by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center gap-6">
          <div className="">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="" />
            <NavLink
              to={"/e-learning"}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Best Sellers
            </NavLink>
          </div>
          <div className="">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="" />
            <NavLink
              to={"/e-learning"}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Pants
            </NavLink>
          </div>
          <div className="">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="" />
            <NavLink
              to={"/e-learning"}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop Tops & Tees
            </NavLink>
          </div>
          <div className="">
            <img src="img/satu.jpg" className="mb-6 w-full" alt="" />
            <NavLink
              to={"/e-learning"}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Shop All
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
