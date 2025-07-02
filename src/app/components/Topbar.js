"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  const navLinks = [
    { name: "HEIM", href: "/" },
    { name: "HÚSIN OKKAR", href: "/sumarhus" },
    { name: "SAUNA", href: "/saunas" },
    { name: "HAFA SAMBAND", href: "/contact" },
  ];

  const [isAtTop, setIsAtTop] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Topbar */}
      <div
        className={`navbar text-main w-full fixed top-0 z-50 transition-all duration-300 ${
          isAtTop ? "h-28" : "h-20"
        }`}
      >
        {/* Main Parent Container */}
        <div className="container mx-auto w-[90%] h-full flex justify-between items-center px-5 border-b border-current">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 h-full flex items-center">
            <Image
              src="/tft-fasteign-logo.png"
              alt="Logo"
              width={150}
              height={75}
              className={`transition-transform duration-300 w-auto h-auto ${
                isAtTop ? "scale-100" : "scale-75"
              }`}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium hover:text-gray-300 tracking-wider relative after:content-[''] after:absolute after:w-[80%] after:h-[2px] after:bg-current after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-main focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50"
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="flex justify-end p-5">
          <button
            aria-label="Close mobile menu"
            onClick={() => setIsSidebarOpen(false)}
            className="text-main hover:text-gray-300 transition-colors"
          >
            <svg
              className="h-6 w-6 mt-7 mr-7"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="p-5 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="block text-main text-lg font-medium hover:text-gray-300 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-5 border-t border-current text-center text-sm">
          <p>© 2025 TFT Fasteign™</p>
        </div>
      </motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
