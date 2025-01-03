'use client'
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", herf: "/" },
    { title: "Features", herf: "/features" },
    { title: "AboutMe", herf: "/about" },
    { title: "Studio", herf: "/studio" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Bloggers" className="text-black" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.herf}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 absolute top-20 left-0 w-full shadow-lg z-50">
          <div className="flex flex-col items-center gap-4 py-4 text-gray-900">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.herf}
                className="text-sm uppercase font-semibold relative group overflow-hidden"
                onClick={toggleMenu}
              >
                {item?.title}
                <span className="w-full h-[2px] bg-blue-700 absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
