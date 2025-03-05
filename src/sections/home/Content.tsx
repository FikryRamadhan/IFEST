import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="lg:w-full bg-black py-14 md:px-10 lg:px-14 px-4">
        <h1 className="lg:text-4xl md:ml-4 md:text-4xl text-2xl text-white mb-8">
          Belanja berdasarkan Kategori
        </h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Belanja Terlaris", img: "img/satu.jpg" },
            { name: "Belanja Celana", img: "img/hero1.jpg" },
            { name: "Belanja Atasan & Kaus", img: "img/hero2.jpg" },
            { name: "Belanja Semua", img: "img/hero3.jpg" },
          ].map((item, index) => (
            <div key={index} className="text-left md:px-5">
              <img
                src={item.img}
                className="min-md:mb-6 mb-4 w-full lg:w-[500px] lg:h-80 h-60 md:h-96 min-md:text-2xl object-cover"
                alt={item.name}
              />
              <NavLink
                to={""}
                className="relative pb-2 text-white text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0 md:text-2xl lg:text-xl"
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
``;
