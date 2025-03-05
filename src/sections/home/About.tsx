import React from "react";
import { Link, NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="">
        <div className="w-full flex flex-col min-md:py-16 min-md:flex-row lg:items-center min-md:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full min-md:w-[450px] min-md:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl md:text-2xl md:mt-10 text-3xl mb-6 text-white">

              Fashion modern yang terlahir kembali dari pakaian lama.
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col min-md:py-16 min-md:flex-row-reverse lg:items-center min-md:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full min-md:w-[450px] min-md:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl md:text-2xl md:mt-10 text-3xl mb-6 text-white">
            Tukar, Daur Ulang, Pakai Lagi!
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col min-md:py-16 min-md:flex-row lg:items-center min-md:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full min-md:w-[450px] min-md:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl md:text-2xl md:mt-10 text-3xl mb-6 text-white">
            Tukar, Daur Ulang, <br />Pakai Lagi!
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
