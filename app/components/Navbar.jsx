"use client";
import React, { useState } from "react";
import { navLinks } from "../data";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-[#1f1f1f]">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      {/* mob screen */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="fixed top-4 right-4 z-50 flex items-center px-3 py-2 border cursor-pointer border-slate-200 text-slate-200 hover:border-white"
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
        <div className="fixed top-0 left-0 w-full py-20 space-y-6 z-40 backdrop-blur-md ">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map(({ href, label }) => (
              <li key={href} onClick={() => setNavbarOpen(!navbarOpen)}>
                <a href={href} className="text-white text-lg ">
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
