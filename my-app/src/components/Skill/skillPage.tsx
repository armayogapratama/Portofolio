"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  width: number;
  height: number;
  i: number;
}

export default function SkillPage({ src, width, height, i }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const varianSkills = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={varianSkills}
      animate={inView ? "visible" : "hidden"}
      custom={i}
      transition={{ delay: i * animationDelay }}>
      <Image src={src} width={width} height={height} alt="skill" />
    </motion.div>
  );
}
