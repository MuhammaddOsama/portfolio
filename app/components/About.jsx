"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import AboutImage from "../../public/about.jpg";
import { TAB_DATA } from "../data";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="container mt-10 mx-auto px-12 py-4">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={AboutImage}
            width={500}
            height={400}
            alt="about image"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>

          <p className="text-base lg:text-lg text-gray-600">
            I'm a Frontend Developer with expertise in JavaScript, React.js, and
            Next.js. I build responsive, user-friendly applications that blend
            performance with great design. I'm passionate about creating seamless
            digital experiences.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <button key={id} onClick={() => handleTabChange(id)}>
                <p
                  className={`mr-3 font-semibold cursor-pointer transition ${
                    tab === id
                      ? "text-[#00adb5]"
                      : "text-gray-500 hover:text-[#00adb5]"
                  }`}
                >
                  {title}
                </p>
                <motion.div
                  animate={tab === id ? "active" : "default"}
                  variants={variants}
                  className="h-1 bg-[#00adb5] mt-2 mr-3 rounded"
                ></motion.div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <ul className="list-disc pl-5 text-gray-700">
              {TAB_DATA.find((t) => t.id === tab)?.content.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
