"use client";
import React, { useState } from "react";
import { navLinks } from "../data";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Variants for staggered mobile menu items
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 bg-white shadow-md">
      {/* Logo */}
      <a href="#top" className="flex items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={160}
          height={50}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          priority
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

      {/* Mobile Toggle */}
      <div className="ml-auto md:hidden flex items-center z-50">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-md transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute top-full left-0 w-full py-4 space-y-4 z-40 bg-white shadow-md md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={itemVariants}
                  onClick={() => setNavbarOpen(false)}
                >
                  <a
                    href={href}
                    className="text-gray-800 text-lg hover:text-black transition-colors duration-200"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
