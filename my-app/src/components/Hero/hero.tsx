"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import dark from "../../../public/tech-stack/mainIconsdark.svg";
import { socials } from "@/utils/social";
import LogoMe from "../Logo/logo";

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-[5rem] w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 m-auto justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-6 gap-6 text-4xl text-bold text-white max-w-[600px] w-auto h-auto">
          Hello, I&apos;m
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            M G Arma Yoga Pratama
          </span>
          as a Full-Stack Developer
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          I have experiences to develop Website Application or Mobile
          Application. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 flex flex-row justify-around bg-white cursor-pointer rounded-lg max-w-[200px]">
          {socials.map((social, i) => {
            return <LogoMe social={social} key={i} />;
          })}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center ml-[10rem]">
        <Image src={dark} alt="MGAYP" width={450} height={450} />
      </motion.div>
    </motion.div>
  );
}
