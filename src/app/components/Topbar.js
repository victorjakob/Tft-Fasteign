"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Topbar() {
  const navLinks = [
    { name: "HEIM", href: "/" },
    { name: "HÚSIN OKKAR", href: "/sumarhus" },
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
          isAtTop ? "py-4" : "py-2"
        }`}
      >
        <div className="container mx-auto border-b border-current w-[90%]">
          <div className="container mx-auto flex justify-between items-center px-5">
            {/* Logo section */}
            <a href="/" className="flex items-center">
              <img
                src="/tft-fasteign-logo.png"
                alt="Logo"
                className={`transition-all duration-300 ${
                  isAtTop ? "h-24" : "h-16"
                }`}
              />
            </a>

            {/* Navigation links for larger screens */}
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:text-gray-300 tracking-wider relative after:content-[''] after:absolute after:w-[80%] after:h-[2px] after:bg-current after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Mobile menu button for smaller screens */}
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
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50"
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {/* Sidebar Header */}
        <div className="flex justify-end p-5 mr-5 mt-8">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-main hover:text-gray-300 transition-colors"
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
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="p-5 space-y-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="block text-main hover:text-gray-300 py-2 px-4 rounded transition-colors duration-200 text-lg tracking-wide"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 w-full p-5 border-t border-current">
          <div className="text-main text-sm text-center">
            <p>© 2025 TFT Fasteign™</p>
          </div>
        </div>
      </motion.div>

      {/* Overlay (optional for better UX) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
}
