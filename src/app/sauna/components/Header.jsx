"use client";
import { motion } from "framer-motion";

export default function SaunaHeader() {
  return (
    <header className="w-full pt-40 mx-auto text-center pb-12 bg-background">
      <motion.h2
        className="text-4xl md:text-5xl font-light mb-4 tracking-tight drop-shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Sauna
      </motion.h2>
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, scaleX: 0.7 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          type: "spring",
          stiffness: 120,
        }}
      >
        <motion.span
          className="inline-block w-32 h-0.5 rounded-full bg-gradient-to-r from-green-800 via-green-900 to-green-800 opacity-60 relative overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          style={{ transformOrigin: "center" }}
        >
          {/* Optional shimmer effect */}
          <motion.span
            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
              delay: 1,
            }}
          />
        </motion.span>
      </motion.div>
      <motion.p
        className="text-lg md:text-xl font-extralight mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        Uppgötvaðu úrval af hágæða saunum <br />
        Umhverfisvottað Sænskt timbur, Koma með öllu inniföldu.
      </motion.p>
    </header>
  );
}
