"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Topbar() {
  const navLinks = [
    { name: "Þjónustur", href: "/services" },
    { name: "Um okkur", href: "/about" },
    { name: "Hafðu Samband", href: "/contact" },
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
        className={`navbar fixed top-0 z-50 w-full bg-background text-main transition-all duration-300 ${
          isAtTop ? "h-28" : "h-20"
        }`}
      >
        {/* Main Parent Container */}
        <div className="container mx-auto flex h-full w-[90%] items-center justify-between px-5">
          {/* Logo Section */}
          <Link href="/" className="flex h-full flex-shrink-0 items-center">
            <h1 className="text-4xl font-extralight tracking-tighter">
              MiniMax
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center space-x-10 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative pl-3 text-base font-extralight tracking-wide transition-all after:absolute after:-bottom-4 after:left-1/2 after:h-[2px] after:w-[80%] after:origin-center after:-translate-x-1/2 after:scale-x-0 after:transform after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:pl-1 hover:tracking-widest hover:text-gray-700 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-main focus:outline-none md:hidden"
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
        className="fixed right-0 top-0 z-50 h-full w-64 bg-background shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="flex justify-end p-5">
          <button
            aria-label="Close mobile menu"
            onClick={() => setIsSidebarOpen(false)}
            className="text-main transition-colors hover:text-gray-300"
          >
            <svg
              className="mr-7 mt-7 h-6 w-6"
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
        <nav className="space-y-4 p-5">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="block text-lg font-medium text-main transition-colors hover:text-gray-300"
              onClick={() => setIsSidebarOpen(false)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full border-t border-current p-5 text-center text-sm">
          <p>© 2025 TFT Fasteign™</p>
        </div>
      </motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
