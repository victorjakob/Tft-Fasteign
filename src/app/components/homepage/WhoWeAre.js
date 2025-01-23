"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="relative my-10 w-full overflow-hidden bg-background">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center">
        {/* Image Section */}
        <motion.div
          className="relative h-[400px] overflow-hidden rounded-lg shadow-xl md:h-[700px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/desk.jpg')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 text-main"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light md:text-4xl lg:text-5xl">
            Þú ert í öruggum höndum hjá okkur
          </h2>
          <p className="text-base font-light leading-relaxed md:text-lg">
            Við höfum samanlagt margra áratuga reynslu af fjölbreyttum rekstri
            og höfum stýrt fjölmörgum félögum í margs konar starfsemi í gegnum
            árin. Við kappkostum að veita viðskiptavinum okkar faglega og
            áreiðanlega aðstoð í þeim fjölmörgu verkefnum sem snerta rekstur
            einyrkja og fyrirtækja.
          </p>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Link
              href="/about"
              className="inline-block rounded border-2 border-main px-6 py-2 text-main transition-colors hover:bg-main hover:text-second"
            >
              Lesa Meira
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
