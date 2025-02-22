import { NavLink } from "react-router-dom";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";
const Navbar = () => {
  return (
    <>
      <div
        id="nav"
        className="w-full lg:px-28 py-6 flex items-center bg-transparent fixed justify-between fixed top-0 z-50"
      >
        <div className="flex ml-4 opacity-100 items-center gap-3">
          <h1 className="font-bold whitespace-nowrap text-zinc-900 lg:text-4xl text-2xl">
            Eco<span className="text-black">Threads</span>
          </h1>
        </div>

        <div className="flex-1 flex ml-20 items-center text-lg gap-14 text-zinc-900 font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-900 after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                : "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-400 after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/e-learning"}
            className={({ isActive }) =>
              isActive
                ? "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-900 after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                : "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-400 after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
            }
          >
            Swap
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-900 after:absolute after:rounded-full after:w-full after:left-0 after:transition-all after:duration-500"
                : "relative pb-2 text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-zinc-900 after:absolute after:rounded-full hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
            }
          >
            Education
          </NavLink>
        </div>

        <div className="flex items-center gap-8 text-zinc-900">
          <IconUser
            size={32}
            className="cursor-pointer hover:text-black transition-colors"
          />
          <IconShoppingBag
            size={32}
            className="cursor-pointer hover:text-black transition-colors"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
