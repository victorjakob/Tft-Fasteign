"use client";

import Image from "next/image";

export default function Myvatn() {
  return (
    <div className="pt-40 relative mb-20 max-w-[95%] lg:max-w-[80%] mx-auto bg-background text-main rounded-lg overflow-hidden">
      {/* Background Title */}
      <h3 className="absolute top-40 right-4 md:right-12 text-4xl md:text-6xl font-bold text-gray-200 opacity-10 z-0 whitespace-nowrap">
        MÝVATN
      </h3>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-4 md:p-8 z-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/home/sumarhus-fasteign.jpg"}
            alt={`Myvatn Main Image`}
            width={1000}
            height={1000}
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="relative flex flex-col justify-between text-left w-full md:w-1/2">
          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-main">MÝVATN</h3>
          <span className="text-lg md:text-xl text-slate-200 opacity-60 block mt-2">
            28 m²
          </span>
          <ul className="mt-4 md:mt-7 tracking-widest font-light mb-4 md:mb-7 space-y-2">
            <li>1 Svefnherbergi</li>
            <li>1 Baðherbergi með sturtu</li>
            <li>Eldhús með innréttingum og tækjum</li>
            <li>Einhalli á þaki</li>
            <li>Sérhannað eftir þörf</li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-14 p-4 md:p-8">
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/sumarhus/myvatn2.png"}
            alt={`myvatn 2 Main Image`}
            width={1000}
            height={1000}
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/sumarhus/myvatn1.png"}
            alt={`myvatn 1 Main Image`}
            width={1000}
            height={1000}
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
