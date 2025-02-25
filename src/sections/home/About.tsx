import React from "react";
import { Link, NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="">
        <div className="w-full flex flex-col min-md:py-16 min-md:flex-row lg:items-center min-md:px-20 gap-10 bg-black">
          <div className="min-md:w-1/2 w-full">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full min-md:w-[450px] min-md:ml-15 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full px-4 lg:px-0 mb-10 lg:mt-0 text-left lg:text-left md:mt-15">
            <h1 className="lg:text-5xl text-3xl mb-6 lg:mb-6 text-white ">
            Fashion modern yang terlahir kembali dari pakaian lama.
            </h1>
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Beli Sekarang
            </NavLink>
          </div>
        </div>
        <div className="w-full flex flex-col min-md:py-16 min-md:flex-row-reverse lg:items-center min-md:px-20 gap-10 bg-black">
          <div className="min-md:w-1/2 w-full">
            <img
              src="img/row.jpg"
              alt=""
              className="w-full min-md:w-[400px] min-md:ml-24 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full px-4 lg:px-0 mb-10 lg:mt-0 text-left lg:text-left md:mt-15">
            <h1 className="lg:text-5xl text-3xl mb-6 lg:mb-6 text-white ">
            Berikan Nyawa Baru pada Pakaian Lama!
            </h1>
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
               Lihat Selanjutnya
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col min-md:flex-row top-0 min-md:items-center min-md:px-20 gap-10 bg-black">
          <div className="min-md:w-1/2 w-full min-md:py-16">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full min-md:[400px] h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 px-4 w-full text-left lg:text-left mb-10">
            <h1 className="lg:text-5xl mb-6  lg:mb-6 text-3xl text-white">
              Tukar, Daur Ulang, Pakai Lagi!
            </h1>
            <NavLink
              to={""}
              className="relative lg:ml-1 pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
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
