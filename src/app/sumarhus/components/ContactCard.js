"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiUser } from "react-icons/fi";
import Link from "next/link";
export default function ContactCard() {
  return (
    <section className="py-16 bg-[#FCF8ED]">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-background rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Section */}
          <div className="flex flex-1 justify-start">
            <div className="relative w-48 h-48">
              <Image
                src="/tft-fasteign-logo.png"
                alt="Company Logo"
                fill
                className="object-contain w-auto h-auto"
              />
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex flex-1 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#FCF8ED] border text-orange-500 rounded-lg hover:bg-[#e9e3d4] hover:scale-105 hover:tracking-widest transition-all duration-300 text-lg font-medium tracking-wide"
            >
              Senda Fyrirspurn
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-1 justify-end">
            <div className="flex flex-col items-center md:items-end space-y-6">
              <div className="flex items-center gap-3 text-[#FCF8ED]">
                <FiUser className="w-5 h-5" />
                <span className="text-lg">Gunnar Bachmann</span>
              </div>
              <div className="flex items-center gap-3 text-[#FCF8ED]">
                <FiPhone className="w-5 h-5" />
                <span className="text-lg">+354 897 2833</span>
              </div>
              <div className="flex items-center gap-3 text-[#FCF8ED]">
                <FiMail className="w-5 h-5" />
                <span className="text-lg">info@tftfasteign.is</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
