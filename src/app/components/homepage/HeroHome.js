"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroHome() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/home/sumarhus-fasteign.jpg')", // Path to your image
        backgroundPosition: "center center", // Ensure centering
        backgroundSize: "cover", // Ensure covering
        backgroundAttachment: "scroll", // Avoid issues with bg-fixed on iOS
      }}
    >
      {/* Overlay Content */}
      <div className="space-y-10 absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center px-4">
        <motion.h1
          className="text-main text-3xl sm:text-4xl md:text-5xl tracking-wide text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3 }}
          style={{ opacity }}
        >
          Sumarhús drauma þinna er hér
        </motion.h1>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          style={{ opacity }}
        >
          <Link
            className="px-6 py-2 sm:px-8 sm:py-3 bg-[#2c73e5] text-main text-sm sm:text-base md:text-lg tracking-wide font-light rounded hover:bg-blue-600"
            href="/sumarhus"
          >
            SKOÐA HÚSIN
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
