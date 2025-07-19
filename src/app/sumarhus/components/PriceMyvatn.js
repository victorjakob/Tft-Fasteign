"use client";

import { motion } from "framer-motion";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50, // Reduced offset for smoother animation
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
    <section className="py-16 bg-[#957F54] overflow-hidden">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Price Section */}
          <motion.div
            className="w-full max-w-md mx-auto text-center md:text-left md:w-1/2 md:border-r md:pr-4"
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
            className="w-full max-w-md mx-auto text-center md:text-left md:w-1/2"
            variants={fadeInVariant("right")}
          >
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
              AFHENDING
            </h3>
            <div className="text-main text-lg">
              <p>Miðast við á Hafnarbakka í Reykjavík</p>
              <p>Húsin eru ósamsett</p>
              <p className="pb-2">
                Grind í útveggjum er forsmíðuð við afhendingu
              </p>
              <h3 className="text-2xl font-medium mt-4">Samstarf</h3>

              <p>við getum útvegað uppsetningu á húsunum.</p>
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
