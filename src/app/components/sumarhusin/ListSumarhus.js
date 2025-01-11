"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // Importing a neat arrow icon
import { motion } from "framer-motion";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

export default function ListSumarhus() {
  return (
    <section className="py-16 bg-[#FCF8ED]">
      <div className="container mx-auto px-4 lg:max-w-6xl space-y-16">
        {/* First House: MYVATN */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-[80%] md:w-7/12 aspect-video overflow-hidden"
            variants={fadeInVariant("left")}
          >
            <div className="group relative w-full h-full">
              <Link href="/myvatn">
                <Image
                  src="/sumarhus/sumarhus1.png"
                  alt="MYVATN"
                  fill
                  className="object-cover transition-transform duration-300 p-5 group-hover:scale-105"
                />
              </Link>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-5/12 text-center md:text-left"
            variants={fadeInVariant("right")}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-second">
              MÝVATN
            </h3>
            <span className="text-xl text-slate-600 block mt-2">28 m²</span>
            <ul className="mt-7 tracking-widest font-light mb-7 space-y-2">
              <li>1 Svefnherbergi</li>
              <li>1 Baðherbergi með sturtu</li>
              <li>Eldhús með innréttingum og tækjum</li>
              <li>Einhalli á þaki</li>
              <li>Sérhannað eftir þörf</li>
            </ul>
            <Link
              href="/myvatn"
              className="flex justify-center md:justify-start items-center text-lg font-medium text-gray-800 hover:text-blue-600 hover:tracking-widest transition-all duration-300"
            >
              SKOÐA
              <FiArrowRight className="ml-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Second House: LANGAVATN */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-[80%] md:w-7/12 aspect-video overflow-hidden"
            variants={fadeInVariant("right")}
          >
            <div className="group relative w-full h-full">
              <Link href="/langavatn">
                <Image
                  src="/sumarhus/sumarhus2.png"
                  alt="LANGAVATN"
                  fill
                  className="object-cover transition-transform duration-300 p-5 group-hover:scale-105"
                />
              </Link>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-5/12 text-center md:text-right"
            variants={fadeInVariant("left")}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-second">
              LANGAVATN
            </h3>
            <span className="text-xl text-slate-600 block mt-2">55-120 m²</span>
            <ul className="mt-7 tracking-widest font-light mb-7 space-y-2">
              <li>1-3 Svefnherbergi</li>
              <li>1-2 Baðherbergi með sturtu</li>
              <li>Eldhús með innréttingum og tækjum</li>
              <li>Einhalli á þaki?</li>
              <li>Sérhannað eftir þörf</li>
            </ul>
            <Link
              href="/langavatn"
              className="flex justify-center md:justify-end items-center text-lg font-medium text-gray-800 hover:text-blue-600 hover:tracking-widest transition-all duration-300"
            >
              SKOÐA
              <FiArrowRight className="ml-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
