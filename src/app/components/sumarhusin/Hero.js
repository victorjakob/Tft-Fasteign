"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSumarhus() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 250], [1, 0]); // Fade out from opacity 1 to 0 as the user scrolls

  return (
    <motion.div
      className="flex flex-col items-center justify-center max-w-[90%] mx-auto 
      mb-10 mt-32 md:mt-48  text-center text-main px-4"
      style={{ opacity }} // Apply dynamic opacity
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-wide">
        Vandgerð sumarhús <br />
        <span className="italic">eftir þinni þörf</span>
      </h1>
      <span className="text-sm md:text-lg mt-4 md:mt-8">
        Einfalt og auðvelt ferli frá draumi til veruleika{" "}
      </span>
    </motion.div>
  );
}
