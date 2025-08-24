import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 shadow-inner shadow-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            Muhammad Osama
          </span>
          . All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Designed & built using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
