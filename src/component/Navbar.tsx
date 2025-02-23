import { NavLink } from "react-router-dom";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import AuthForm from "./AuthForm";
const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { username, password });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        loginButtonRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !loginButtonRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        id="nav"
        className="w-full px-4  lg:px-28 py-6 flex items-center bg-transparent justify-between fixed top-0 z-50"
      >
        <div className="flex  opacity-100 items-center gap-3">
          <h1 className="font-bold whitespace-nowrap text-zinc-900 lg:text-4xl text-2xl">
            Eco<span className="text-black">Threads</span>
          </h1>
        </div>

        <div className="hidden flex-1 lg:mt-5 lg:flex ml-20 items-center text-lg gap-14 text-zinc-900 font-semibold">
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Home
          </NavLink>
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Swap
          </NavLink>
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Education
          </NavLink>
          {/* <NavLink
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
          </NavLink> */}
        </div>

        <div className="flex items-center gap-4 lg:gap-8 text-zinc-900">
          <button onClick={toggleSidebar} ref={loginButtonRef}>
            <IconUser
              size={32}
              className="cursor-pointer hover:text-black transition-colors"
            />
          </button>
          <IconShoppingBag
            size={32}
            className="cursor-pointer hover:text-black transition-colors"
          />
        </div>
      </div>

      {/* Sidebar Auth */}
      <div className="m-0 font-sans">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 ${
            isOpen ? "right-0" : "right-[-300px]"
          }`}
        >
          <div className="mt-10 mb-2">
            <h4 className="text-xl">Account</h4>
            <p className="text-sm">
              Sign in so we can save your Favorites for you.
            </p>
          </div>
          <AuthForm />
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
