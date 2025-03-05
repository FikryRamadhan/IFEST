import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="pt-24 pb-12 bg-black lg:px-24 md:px-10 px-1">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">SecoundSoul</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>alope@gmail.com</p>
              <p>Kuningan</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-white mb-5 text-xl">
                Tim Kami
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Fikry Ramadhan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Billy Jonathan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Muhammad Rizky
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-white mb-5 text-xl">
                Fitur Kami
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Home 
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    Swap
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="inline-block text-base hover:text-slate-100 mb-3"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 mr-3 flex rounded-full items-center border justify-center border-blue-300 hover:border-zinc-900 hover:bg-white text-white hover:text-zinc-950"
              >
                <IconBrandTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 mr-3 flex rounded-full items-center border justify-center border-blue-300 hover:border-zinc-900 hover:bg-white text-white hover:text-zinc-950"
              >
                <IconBrandGithub />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 mr-3 flex rounded-full items-center border justify-center border-blue-300 hover:border-zinc-900 hover:bg-white text-white hover:text-zinc-950"
              >
                <IconBrandInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 mr-3 flex rounded-full items-center border justify-center border-blue-300 hover:border-zinc-900 hover:bg-white text-white hover:text-zinc-950"
              >
                <IconBrandFacebook />
              </a>
            
            </div>
          </div>

          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat Dengan <span className="text-pink-500">❤️</span>
            <a href="#" target="_blank" className="font-bold text-white">
              Oleh Tim Alope{" "}
            </a>
            , Menggunakan
            <a href="#" target="_blank" className="font-bold text-white">
              HTML & Css.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
