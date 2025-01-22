"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroHome() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen">
      <div
        className="mx-auto flex h-[95%] w-[95%] items-center justify-center"
        style={{
          backgroundImage: "url('/office.jpg')", // Path to your image
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 px-4 text-main">
        <motion.h1
          className="text-center text-3xl text-second sm:text-4xl md:text-5xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3 }}
          style={{ opacity }}
        >
          Við erum sérfræðingar í bókhaldi
        </motion.h1>
      </div>
    </div>
  );
}
