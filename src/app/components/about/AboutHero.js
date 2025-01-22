"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function AboutHero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/office1.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-libre-bodoni mb-6 text-center text-4xl font-light tracking-wide md:text-5xl lg:text-6xl"
            style={{ opacity }}
          >
            Um okkur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl text-center text-lg md:text-xl"
            style={{ opacity }}
          >
            Við erum leiðandi fyrirtæki í bókhalds- og fjármálaþjónustu með
            áratuga reynslu og framúrskarandi þjónustu við viðskiptavini okkar.
          </motion.p>

          <motion.button
            onClick={scrollDown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-10 cursor-pointer text-white"
            style={{ opacity }}
          >
            <ChevronDownIcon className="h-12 w-12 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
