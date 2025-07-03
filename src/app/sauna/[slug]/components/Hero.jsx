"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({ sauna }) {
  return (
    <section className="w-full min-h-screen relative bg-gray-900">
      <Image
        src={sauna?.image_url}
        alt={sauna?.name || "Sauna"}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 80vw"
      />

      {/* Overlay text positioned in lower left */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <div className="absolute bottom-16 left-8 sm:left-16 max-w-xl text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extralight drop-shadow-lg">
            {sauna?.name || "No name available"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-thin mt-4 tracking-wide drop-shadow-md pr-4">
            {sauna?.description || "no description available"}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 60,
            }}
            className="mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="#customization"
                className="inline-block rounded-sm border border-green-700 bg-white/90 text-black px-7 py-3 sm:py-2 text-base font-light tracking-wide shadow-sm hover:bg-green-50 hover:text-green-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                style={{ letterSpacing: "0.05em" }}
                aria-label="Panta - Opna sérsniðna pöntunarsvæðið"
              >
                PANTA
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
