"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { Mobile, Website } from "@/utils/project";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center mt-[4rem] z-[20] mx-[8rem]">
      <div className="h-full w-full flex flex-col gap-1 justify-center text-center items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box mt-[3.5rem] py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Project</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-6 gap-4 leading-10 text-lg text-bold text-white h-auto text-justify">
          As a full stack developer, creating a web or mobile application
          presents its own set of challenges because we have to manage both the
          backend and frontend to ensure our application runs smoothly.
        </motion.div>
      </div>

      <div className="mt-[4rem] justify-between h-full w-full flex flex-row gap-36">
        <div className="text-start">
          <motion.div
            variants={slideInFromTop}
            className="Educate-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Website App</h1>
          </motion.div>

          {Website.map((web, i) => {
            return (
              <motion.div
                key={i}
                variants={slideInFromRight(0.8)}
                className="flex flex-col mt-6 gap-6 text-md text-justify text-bold text-white max-w-[600px] w-auto h-auto">
                <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {web.name}
                </span>
                {web.desc}
                <div className="flex justify-center items-center">
                  <Image
                    src={web.src}
                    alt={web.name}
                    width={300}
                    height={200}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-start">
          <motion.div
            variants={slideInFromTop}
            className="Educate-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Mobile App</h1>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex flex-col mt-6 gap-6 text-md text-justify text-bold text-white max-w-[600px] w-auto h-auto">
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {Mobile.name}
            </span>
            {Mobile.desc}
            <div className="flex justify-center items-center">
              <Image
                src={Mobile.src}
                alt={Mobile.name}
                width={200}
                height={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
