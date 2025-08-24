"use client";
import React, { useState } from "react";
import { navLinks } from "../data";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between space-x-5 z-50 bg-white shadow-md">
      <a
        href="#top"
        className="font-extrabold text-xl sm:text-2xl tracking-tight cursor-pointer bg-gradient-to-r from-[#00adb5] via-black to-[#00adb5] text-transparent bg-clip-text drop-shadow-sm"
      >
        Muhammad Osama
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* mob screen */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="fixed top-4 right-4 z-50 flex items-center px-3 py-2 border cursor-pointer border-gray-400 text-gray-800 hover:border-black hover:text-black"
        >
          {navbarOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* mobile menu */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full py-20 space-y-6 z-40 backdrop-blur-md bg-white shadow-md">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map(({ href, label }) => (
              <li key={href} onClick={() => setNavbarOpen(!navbarOpen)}>
                <a
                  href={href}
                  className="text-gray-800 text-lg hover:text-black transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
