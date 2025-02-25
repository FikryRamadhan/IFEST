import { NavLink } from "react-router-dom";
import {
  IconShoppingBag,
  IconUser,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import AuthForm from "./AuthForm";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  let lastScrollY = useRef(0);
  let scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle menu toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      // Scroll ke bawah -> navbar menghilang
      setIsNavbarVisible(false);
    } else {
      // Scroll ke atas -> navbar muncul
      setIsNavbarVisible(true);
    }

    // Cek apakah navbar harus tetap muncul setelah scroll berhenti
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsNavbarVisible(true);
    }, 500);

    // Simpan posisi terakhir scroll
    lastScrollY.current = currentScrollY;
    setIsScrolled(currentScrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        id="nav"
        className={`w-full px-4 lg:px-28 py-6 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
          </button>
          <h1 className="font-bold whitespace-nowrap text-zinc-900 lg:text-4xl text-2xl">
            Eco<span className="text-black">Threads</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:mt-4 lg:flex flex-1 ml-20 items-center text-lg gap-14 text-zinc-900 font-semibold">
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Home
          </NavLink>
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Swap
          </NavLink>
          <NavLink
            to={""}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            About
          </NavLink>
        </div>

        {/* Right Side */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden z-50`}
      >
        <div className="p-6">
          {/* Header Mobile Menu */}
          <div className="flex items-center justify-between">
            <h1 className="text-left font-bold text-xl mr-auto">EcoThreads</h1>
            <button onClick={toggleMenu}>
              <IconX size={32} />
            </button>
          </div>

          {/* Navigasi */}
          <nav className="flex flex-col gap-4 mt-10 text-lg font-semibold">
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-1/2  after:transition-all after:duration-500 after:left-0"
            >
              Home
            </NavLink>
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-1/2 after:transition-all after:duration-500 after:left-0"
            >
              Swap
            </NavLink>
            <NavLink
              to={""}
              className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-1/2 after:transition-all after:duration-500 after:left-0"
            >
              Education
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Sidebar Auth */}
      <div className="m-0 font-sans">
        <div
          ref={sidebarRef}
          className={`fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 ${
            isSidebarOpen ? "right-0" : "right-[-300px]"
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
        {isSidebarOpen && (
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
