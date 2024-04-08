"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function AboutHome() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center mt-[1rem] z-[20] mr-[6rem]">
      <div className="h-full w-full flex flex-col gap-1 justify-center text-center items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box mt-[3.5rem] py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9] ml-[6rem]">
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Summary</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-6 gap-4 leading-10 text-lg text-bold text-white h-auto text-justify">
          Starting as a mathematics graduate with a strong logical thinking, I
          became interested in web development and mobile development, which led
          me to decide to further my education at Hacktiv8 as a full-stack
          developer. My journey as a programmer became the primary foundation
          for switching careers with expertise in backend and frontend skills.
          Skills I have acquired and immediately implemented in projects, I have
          become more accustomed to and mastered what I have gained. I am
          seeking a platform to develop my abilities and apply what I have
          learned.
        </motion.div>
      </div>

      <div className="mt-[4rem] justify-between h-full w-full flex flex-row">
        <div className="text-start">
          <motion.div
            variants={slideInFromTop}
            className="Educate-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Education</h1>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex flex-col mt-6 gap-6 text-xl text-bold text-white max-w-[600px] w-auto h-auto">
            Full-Stack Javascript Immersive
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hacktiv8 Indonesia
            </span>
            <span className="text-[12px]">November 2023 - February 2024</span>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex flex-col mt-6 gap-6 text-xl text-bold text-white max-w-[600px] w-auto h-auto">
            Mathematics
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Lampung University
            </span>
            <span className="text-[12px]">September 2017 - February 2022</span>
          </motion.div>
        </div>

        <div className="text-end">
          <motion.div
            variants={slideInFromTop}
            className="Experience-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Work Experiences</h1>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex flex-col mt-6 gap-6 text-xl text-bold text-white h-auto">
            Internship Pengawasan dan Pengendalian Pajak
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              BPPRD Bandar Lampung
            </span>
            <span className="text-[12px]">January 2020 - February 2020</span>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex flex-col mt-6 gap-6 text-xl text-bold text-white h-auto">
            Trainer Planet English 56Th
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Kresna English Institute
            </span>
            <span className="text-[12px]">January 2017 - Maret 2017</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
