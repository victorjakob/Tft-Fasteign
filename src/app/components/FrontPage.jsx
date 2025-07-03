"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FrontPage() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Sumarhús Section */}
      <Link
        href="/sumarhus"
        className="relative flex-1 h-1/2 md:h-auto group focus:outline-none overflow-hidden"
        aria-label="Fara á sumarhúsasíðu"
      >
        <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform">
          <Image
            src="/home/sumarhus-fasteign.jpg"
            alt="Sumarhús - TFT Fasteign"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </div>
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Animated text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            type: "tween",
            ease: "easeOut",
          }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-extralight tracking-wider drop-shadow-2xl mb-2 text-center">
            Sumarhús
          </h1>
          <span className="text-white text-lg md:text-2xl font-light bg-black/10 rounded-full px-6 py-3 mt-2 shadow-lg ">
            Skoða sumarhús
          </span>
        </motion.div>
      </Link>
      {/* Sauna Section */}
      <Link
        href="/sauna"
        className="relative flex-1 h-1/2 md:h-auto group focus:outline-none overflow-hidden"
        aria-label="Fara á saunasíðu"
      >
        <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform">
          <Image
            src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1750363498/urban-lux-front_rylxyx.jpg"
            alt="Sauna - TFT Fasteign"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </div>
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Animated text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            type: "tween",
            ease: "easeOut",
          }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-extralight tracking-wider drop-shadow-2xl mb-2 text-center">
            Sauna
          </h1>
          <span className="text-white text-lg md:text-2xl font-light bg-black/10 rounded-full px-6 py-3 mt-2 shadow-lg ">
            Skoða saunur
          </span>
        </motion.div>
      </Link>
    </div>
  );
}
