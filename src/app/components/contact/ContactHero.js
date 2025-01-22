"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="max-w[80%] relative overflow-hidden bg-background pt-24">
      <div className="container mx-auto border-b border-black px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-light tracking-tight text-main md:text-5xl lg:text-6xl">
            Verið velkomin til okkar{" "}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600">
            Við erum ávallt tilbúin að aðstoða þig. Hvort sem þú hefur
            spurningar um þjónustu okkar eða vilt ræða þín málefni, þá erum við
            hér fyrir þig.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
