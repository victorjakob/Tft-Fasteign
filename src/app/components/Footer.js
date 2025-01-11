import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background rounded-lg shadow text-main">
      <div className="w-full max-w-[90%] mx-auto p-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0"
          >
            <img
              src="/tft-fasteign-logo.png"
              className="h-14 md:h-16"
              alt="TFT Fasteign Logo"
            />
          </Link>

          {/* Links Section */}
          <div className="flex flex-col items-center sm:items-center mb-4 sm:mb-0 space-y-2">
            <Link
              href="/sumarhus"
              className="hover:underline text-sm md:text-base"
            >
              Húsin okkar
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-sm md:text-base"
            >
              Hafa samband
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center sm:items-end space-y-1 text-center sm:text-right">
            <p className="text-xs md:text-sm">
              Studio E8, Engihjalli 8, 200 Kópavogur
            </p>
            <p className="text-xs md:text-sm">+354 897 2833</p>
            <p className="text-xs md:text-sm">GunnarBachmann1@gmail.com</p>
          </div>
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
