"use client";
import Image from "next/image";
import React from "react";
import profile from "../../public/hero.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4">
      {/* Profile image container */}
      <div className="rounded-full bg-gray-100 w-[200px] h-[200px] relative shadow-md">
        <Image
          src={profile}
          alt="profile image"
          className="rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>

      {/* Heading */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 text-gray-800">
        Hi I'm Osama
      </h3>

      {/* Animated Text */}
      <div className="text-3xl sm:text-6xl lg:text-[66px] font-bold text-[#00adb5]">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            3000,
            "React Developer",
            3000,
            "Next Js Developer",
            3000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 max-w-2xl mx-auto">
        Frontend Developer with almost one year experience in React, Next.js,
        JavaScript, and Tailwind CSS, building responsive and user-friendly
        applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="mailto:muhammadosamabangash@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 rounded-full bg-[#00adb5] text-white font-medium hover:bg-[#008b91] transition"
        >
          Contact Me
        </a>
        <a
          href=""
          className="px-10 py-3 rounded-full border border-[#00adb5] text-[#00adb5] hover:bg-[#00adb5] hover:text-white font-medium transition"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
