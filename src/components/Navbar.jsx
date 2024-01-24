import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex bg-pink-500 h-14 items-center justify-between ${
        scrolling ? "fixed top-0 z-10" : ""
      }`}>
      <h2 className="text-white font-bold ml-4 text-lg md:text-sm lg:text-xl cursor-pointer">
        Smart-<span className="text-blue-700 italic">Tech</span> Kenya
      </h2>


      <div className="flex p-2 md:hidden">
        {open ? (
          <BiX
            onClick={handleMenu}
            className="text-white text-3xl ml-auto mr-4 cursor-pointer"
          />
        ) : (
          <BiMenu
            onClick={handleMenu}
            className="text-white text-3xl ml-auto mr-4 cursor-pointer"
          />
        )}
      </div>

      <ul
        className={`flex p-2 md:flex ${
          open
            ? "flex-col w-full absolute top-14 bg-pink-500"
            : "hidden md:flex"
        }`}>
        <Link
          to="/"
          className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Home
        </Link>
        <Link
          to="/products"
          className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Products
        </Link>
        <Link
          to="/about"
          className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          About
        </Link>
        <Link
          to="/contact"
          className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Contacts
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
