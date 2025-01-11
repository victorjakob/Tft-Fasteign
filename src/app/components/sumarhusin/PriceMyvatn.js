"use client";

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

export default function Price() {
  return (
    <section className="py-16 bg-[#957F54]">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Price Section */}
          <motion.div
            className="w-full max-w-md mx-auto md:w-1/2 text-center md:text-left lg:border-r"
            variants={fadeInVariant("left")}
          >
            <h3 className="text-3xl md:text-4xl font-medium text-white tracking-wide mb-4">
              VERÐ
            </h3>
            <div className="text-xl text-main">
              <p className="text-sm opacity-75">Án VSK</p>
              <p className="text-2xl font-bold mb-2">5.695.000 kr.</p>
              <p className="text-sm opacity-75">Með VSK</p>
              <p className="text-2xl font-bold mb-2">7.061.800 kr.</p>
            </div>
          </motion.div>

          {/* Delivery Section */}
          <motion.div
            className="w-full max-w-md md:w-1/2 text-center md:text-left"
            variants={fadeInVariant("right")}
          >
            <h3 className="md:text-4xl font-medium text-white mb-2 lg:text-2xl">
              AFHENDING
            </h3>
            <div className="text-main">
              <p className="">Miðast við á Hafnarbakka í Reykjavík</p>
              <p>Húsin eru ósamsett</p>
              <p className="pb-2">
                Grind í útveggjum er forsmíðuð við afhendingu
              </p>
              <h3 className="text-2xl font-medium">Samstarf</h3>
              <p>Smiðir sem setja saman húsin (Breyting ehf)</p>
              <p>
                Kranaþjónusta tekur að sér að flytja og hýfa einingar á
                endanlegum stað
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
