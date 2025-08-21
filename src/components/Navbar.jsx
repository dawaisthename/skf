import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/images/logo.png"; // Black logo
import whitecompanyLogo from "../assets/images/Logo-SKF_white.png"; // White logo

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setToggleMenu(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          z-50 transition-all duration-500
          ${
            isScrolled
              ? "bg-white/70 backdrop-blur-lg shadow-md"
              : "md:bg-transparent md:backdrop-blur-0 bg-white/30 backdrop-blur-lg"
          }
          fixed top-4 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl
          md:sticky md:top-0 md:left-0 md:translate-x-0 md:w-full md:rounded-none
        `}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            {/* Desktop logo (switch on scroll) */}
            <img
              src={isScrolled ? companyLogo : whitecompanyLogo}
              className="hidden md:block w-30 h-16 object-cover drop-shadow-md"
              alt="Company Logo"
            />
            {/* Mobile logo (always black) */}
            <img
              src={companyLogo}
              className="md:hidden w-30 h-16 object-cover drop-shadow-md"
              alt="Company Logo"
            />
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setToggleMenu((t) => !t)}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={toggleMenu ? "true" : "false"}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg md:hidden hover:bg-gray-200/60 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {toggleMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-10">
            <Link
              to="/"
              className={`font-semibold transition ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`font-semibold transition ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/product"
              className={`font-semibold transition ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Product
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* 📱 Floating Mobile Menu */}
      {toggleMenu && (
        <div
          className="
            fixed left-1/2 -translate-x-1/2 z-50 md:hidden
            top-24 w-[90%] max-w-sm
            bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl
            p-6 flex flex-col space-y-6 text-center transition-transform duration-300
          "
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="text-gray-900 hover:text-blue-600 font-bold text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-gray-900 hover:text-blue-600 font-bold text-lg"
          >
            About
          </Link>

          <Link
            to="/product"
            onClick={closeMenu}
            className="text-gray-900 hover:text-blue-600 font-bold text-lg"
          >
            Product
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-900 hover:text-blue-600 font-bold text-lg"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
