"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="bg-background rounded-lg shadow text-main">
      <div className="w-full max-w-[90%] mx-auto p-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0"
          >
            <Image
              src="/tft-fasteign-logo.png"
              alt="TFT Fasteign Logo"
              width={150}
              height={75}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Links Section */}
          <nav
            aria-label="Footer"
            className="flex flex-col items-center sm:items-center mb-4 sm:mb-0 space-y-2"
          >
            <Link
              href="/sumarhus"
              className="hover:underline text-sm md:text-base"
            >
              Húsin okkar
            </Link>
            <Link
              href="/sauna"
              className="hover:underline text-sm md:text-base"
            >
              Saunur
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-sm md:text-base"
            >
              Hafa samband
            </Link>
          </nav>

          {/* Contact Information */}
          <address className="flex flex-col items-center sm:items-end space-y-1 text-center sm:text-right not-italic">
            <div>Studio E8, Engihjalli 8, 200 Kópavogur</div>
            <div>
              <a href="tel:+3548972833" className="hover:underline">
                +354 897 2833
              </a>
            </div>
            <div>
              <a
                href="mailto:GunnarBachmann1@gmail.com"
                className="hover:underline"
              >
                GunnarBachmann1@gmail.com
              </a>
            </div>
          </address>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Copyright Section */}
        <span className="block text-xs md:text-sm text-center">
          © 2025{" "}
          <Link href="/" className="hover:underline font-semibold">
            TFT Fasteign™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
