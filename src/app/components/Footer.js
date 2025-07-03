"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="relative w-full bg-background text-main min-h-[150px] md:min-h-[180px] flex items-center justify-center py-6 md:py-8">
      {/* Desktop layout: absolute/fixed sections */}
      <div className="hidden md:block w-full h-full">
        {/* Logo - left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/tft-fasteign-logo.png"
              alt="TFT Fasteign Logo"
              width={300}
              height={150}
              className="h-14 md:h-24 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        {/* Center: links + copyright grouped */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
          <nav
            aria-label="Footer"
            className="flex flex-col items-center space-y-2"
          >
            <Link
              href="/sumarhus"
              className="hover:underline text-base font-medium"
            >
              Húsin okkar
            </Link>
            <Link
              href="/sauna"
              className="hover:underline text-base font-medium"
            >
              Saunur
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-base font-medium"
            >
              Hafa samband
            </Link>
          </nav>
          <div className="w-full mt-8 font-extralight  pt-4 flex  flex-col items-center">
            <span className="block text-xs md:text-sm text-gray-200 text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                TFT Fasteign™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
        {/* Contact - right */}
        <address className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 flex flex-col items-end space-y-1 text-right not-italic text-sm">
          <span className="text-lg">Studio E8 - </span>
          <div>Engihjalli 8, 200 Kópavogur</div>
          <div>
            <a href="tel:+3548972833" className="hover:underline">
              +354 897 2833
            </a>
          </div>
          <div>
            <a href="mailto:info@tftfasteign.is" className="hover:underline">
              info@tftfasteign.is
            </a>
          </div>
        </address>
      </div>

      {/* Mobile layout: stacked */}
      <div className="block md:hidden w-full max-w-[90%] mx-auto p-6 md:py-8">
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
              className="h-20 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Links Section */}
          <nav
            aria-label="Footer"
            className="border-t border-gray-200/20 pt-4 flex flex-col items-center sm:items-center mb-4 sm:mb-0 space-y-2"
          >
            <Link href="/sumarhus" className="hover:underline text-base">
              Húsin okkar
            </Link>
            <Link href="/sauna" className="hover:underline text-base">
              Saunur
            </Link>
            <Link href="/contact" className="hover:underline text-base">
              Hafa samband
            </Link>
          </nav>

          {/* Contact Information */}
          <address className=" border-t border-gray-200/20 pt-4 flex flex-col text-sm items-center sm:items-end space-y-1 text-center sm:text-right not-italic">
            <div>
              Studio E8 <br /> Engihjalli 8, 200 Kópavogur
            </div>
            <div>
              <a href="tel:+3548972833" className="hover:underline">
                +354 897 2833
              </a>
            </div>
            <div>
              <a href="mailto:info@tftfasteign.is" className="hover:underline">
                info@tftfasteign.is
              </a>
            </div>
          </address>
        </div>
        <span className="border-t border-gray-200/20 pt-4 block text-xs md:text-sm text-gray-300 text-center mt-8">
          © 2025{" "}
          <Link href="/" className="hover:underline font-extralight">
            TFT Fasteign™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
