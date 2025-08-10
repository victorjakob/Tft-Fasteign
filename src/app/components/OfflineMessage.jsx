"use client";

import { motion } from "framer-motion";

export default function OfflineMessage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        className="text-center max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo placeholder */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">TFT</span>
          </div>
        </motion.div>

        {/* Main message */}
        <motion.h1
          className="text-4xl md:text-6xl font-extralight tracking-wider text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Við erum að uppfæra
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Vefsíðan er tímabundið óaðgengileg vegna viðhalds og uppfærslu.
          <br />
          Við erum að vinna að því að koma henni aftur í gang eins fljótt og
          mögulegt er.
        </motion.p>

        {/* Subtitle */}
        <motion.div
          className="text-lg text-gray-500 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p>Takk fyrir þolinmæðina!</p>
          <p className="text-sm mt-2">We'll be back soon!</p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.0 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1.0 }}
        />
      </motion.div>
    </div>
  );
}
