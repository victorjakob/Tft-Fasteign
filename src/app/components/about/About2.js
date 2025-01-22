"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About2() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:flex-row lg:items-start">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-[85%] space-y-4 md:w-full md:space-y-6 lg:flex-1"
        >
          <h1 className="font-libre-bodoni text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Okkar þekking er þín stoð
          </h1>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:leading-loose">
            Við höfum samanlagt margra áratuga reynslu af hvers konar reksti og
            stýrt fjölmörgum félögum í margskonar rekstri í gegnum árin. Við
            kappkostum við að veita viðskiptavinum okkar faglega aðstoð í þeim
            fjölmörgu verkefnum sem snerta rekstur einyrkja og fyrirtækja.
          </p>
          <h2 className="text-xl font-light tracking-tight sm:text-2xl md:text-3xl lg:pt-10">
            Velkomin í fjölbreyttan hóp ánægðra viðskiptavina
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-[85%] md:w-full lg:flex-1"
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src="/suits.jpg"
              alt="Professional office environment"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
