import { NavLink } from "react-router-dom";
import {
  IconShoppingBag,
  IconUser,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../hooks/cartContext";
import AuthForm from "./AuthForm";
import Cart from "./Cart";

const Navbar = () => {
  const { cart, handleQuantityChange, handleSelectChange } = useCart()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  let lastScrollY = useRef(0);
  let scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle menu toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      // Scroll ke bawah -> navbar menghilang
      setIsNavbarVisible(true);
    } else {
      // Scroll ke atas -> navbar muncul
      setIsNavbarVisible(false);
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
        className={`w-full px-4 lg:px-28 py-3 bg-white md:px-10 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white opacity-90 shadow-md" : "bg-transparent"
        }`}
      >
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
          </button>
          <h1 className="whitespace-nowrap text-zinc-900 lg:text-4xl text-2xl">
            Second Soul
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:mt-4 lg:flex flex-1 ml-20 items-center text-lg gap-14 text-zinc-900 font-semibold">
          <NavLink
            to={"/"}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Home
          </NavLink>
          <NavLink
            to={"/shop-fashion"}
            className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
          >
            Shop
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
          <button onClick={toggleCart} className="relative inline-block">
            <IconShoppingBag
              size={32}
              className="cursor-pointer hover:text-black transition-colors"
            />
            {/* Badge Angka */}
            <span
              className="
                absolute
                -top-1
                -right-1
                bg-red-500
                text-white
                text-xs
                rounded-full
                w-4
                h-4
                flex
                items-center
                justify-center
              "
            >
              {cart.length}
            </span>
          </button>
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
            <h1 className="text-left font-bold text-xl mr-auto">Second Soul</h1>
            <button onClick={toggleMenu}>
              <IconX size={32} />
            </button>
          </div>

          {/* Navigasi */}
          <nav className="flex flex-col gap-4 mt-10 text-lg font-semibold">
            <NavLink
              to={"/"}
              className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-1/2  after:transition-all after:duration-500 after:left-0"
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop-fashion"}
              className="relative lg:ml-1  pb-2 text-zinc-950 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-zinc-950 after:absolute after:rounded-full hover:after:w-1/2 after:transition-all after:duration-500 after:left-0"
            >
              Shop
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

{/* Sidebar Cart */}
<div className="m-0 font-sans">
  <div
    className={`fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 flex flex-col ${
      isCartOpen ? "right-0" : "right-[-300px]"
    }`}
  >
    {/* Header - tetap di atas */}
    <div className="flex-none">
      <div className="flex items-center justify-between">
        <h4 className="text-xl">Cart</h4>
        <button onClick={toggleCart}>
          <IconX size={32} />
        </button>
      </div>
    </div>

    {/* Area Item - hanya bagian ini yang discroll */}
    <div className="flex-1 mt-6 overflow-y-auto">
      {cart.map((cartItem) => (
        <Cart
          key={cartItem.id}
          {...cartItem}
          onQuantityChange={handleQuantityChange}
          onSelectChange={handleSelectChange}
        />
      ))}
    </div>

    {/* Footer Checkout - selalu di bawah */}
    <div className="flex-none border-t pt-4">
      {(() => {
        const totalItems = cart.reduce(
          (acc, item) => acc + (item.selected ? item.quantity : 0),
          0
        );
        const totalPrice = cart.reduce(
          (acc, item) =>
            acc + (item.selected ? item.price * item.quantity : 0),
          0
        );
        return (
          <>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Price:</span>
              <span>Rp {totalPrice.toLocaleString()}</span>
            </div>
          </>
        );
      })()}
      <button className="w-full bg-black text-white py-2 rounded mt-4">
        Checkout
      </button>
    </div>
  </div>
  {isCartOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={toggleCart}
    ></div>
  )}
</div>



    </>
  );
};

export default Navbar;
