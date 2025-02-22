import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <section className="">
        <div className="w-full flex items-center lg:px-20 gap-20 bg-zinc-900">
          <div className="w-1/2 py-16">
            <img src="img/satu.jpg" alt="" />
          </div>
          <div className="w-1/2 ">
            <h1 className="text-6xl mb-8 text-white">
              {" "}
              Modern shapes <br />
              that move with <br />
              you.
            </h1>
            <NavLink
              to={"/e-learning"}
              className={({ isActive }) =>
                isActive
                  ? "relative pb-2 text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                  : "relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              Shop Pants
            </NavLink>
          </div>
        </div>
        <div className="w-full flex items-center lg:px-20 gap-20  bg-zinc-900">
          <div className="w-1/2 ">
            <h1 className="text-6xl mb-8 text-white">
              {" "}
              Modern shapes <br />
              that move with <br />
              you.
            </h1>
            <NavLink
              to={"/e-learning"}
              className={({ isActive }) =>
                isActive
                  ? "relative pb-2 text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                  : "relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              Shop Tops
            </NavLink>
          </div>
          <div className="w-1/2 py-16">
            <img src="img/satu.jpg" alt="" />
          </div>
        </div>
        <div className="w-full flex items-center lg:px-20 gap-20  bg-zinc-900">
          <div className="w-1/2 py-16">
            <img src="img/satu.jpg" alt="" />
          </div>
          <div className="w-1/2 ">
            <h1 className="text-6xl mb-8 text-white">
              {" "}
              Modern shapes <br />
              that move with <br />
              you.
            </h1>
            <NavLink
              to={"/e-learning"}
              className={({ isActive }) =>
                isActive
                  ? "relative pb-2 text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                  : "relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              Shop New Arrivals
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
