import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-foreground bg-background text-main shadow">
      <div className="mx-auto w-full max-w-[90%] p-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex h-full flex-shrink-0 items-center">
            <h1 className="text-4xl font-extralight tracking-tighter">
              MiniMax
            </h1>
          </Link>

          {/* Links Section */}
          <div className="mb-4 flex flex-col items-center space-y-2 sm:mb-0 sm:items-center">
            <Link
              href="/sumarhus"
              className="text-sm hover:underline md:text-base"
            >
              Þjónustur
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:underline md:text-base"
            >
              Um okkur
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:underline md:text-base"
            >
              Hafa samband
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-1 text-center sm:items-end sm:text-right">
            <p className="text-xs md:text-sm">
              Studio E8
              <br /> Engihjalli 8<br />
              200 Kópavogur
            </p>
            <p className="text-xs md:text-sm">+354 547 2211</p>
            <p className="text-xs md:text-sm">fyrirspurn@minimax.is</p>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Copyright Section */}
        <span className="block text-center text-xs md:text-sm">
          © 203{" "}
          <Link href="/" className="font-semibold hover:underline">
            MiniMax™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
