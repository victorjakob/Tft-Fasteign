"use client";

import { motion } from "framer-motion";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50, // Reduced offset to prevent overflow
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
          className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Price Section */}
          <motion.div
            className="border-b pb-10 md:pb-0 md:border-b-0 md:border-r w-full max-w-md mx-auto text-center md:text-left md:w-1/2"
            variants={fadeInVariant("left")}
          >
            <h3 className="text-3xl md:text-4xl font-medium text-white tracking-wide mb-8">
              VERÐ
            </h3>
            <div className="space-y-8 text-main">
              {[
                {
                  size: "55 m²",
                  priceWithoutVAT: "9.980.000 kr.",
                  priceWithVAT: "12.375.000 kr.",
                },
              ].map((item, index) => (
                <div key={index} className="">
                  <h4 className="text-2xl font-extralight text-white/90 mb-1">
                    {item.size}
                  </h4>
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <span className="text-xl font-medium pr-3">
                      {item.priceWithoutVAT}
                    </span>
                    <span className="text-sm opacity-75">Án VSK</span>
                  </div>
                  <div className="flex justify-center md:justify-start items-center">
                    <span className="text-xl font-medium pr-3">
                      {item.priceWithVAT}
                    </span>
                    <span className="text-sm opacity-75">Með VSK</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Delivery Section */}
          <motion.div
            className="w-full max-w-md mx-auto text-center md:text-left md:w-1/2 md:pl-4"
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
