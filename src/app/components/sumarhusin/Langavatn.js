"use client";

import Image from "next/image";

export default function Langavatn() {
  return (
    <div className="pt-40 relative mb-20 max-w-[95%] lg:max-w-[80%] mx-auto m-5 bg-background text-main rounded-lg overflow-hidden">
      {/* Background Title */}
      <h3 className="absolute top-40 right-12 text-6xl font-bold text-gray-200 opacity-10 z-0">
        LANGAVATN
      </h3>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row  justify-between gap-8 p-8 z-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/sumarhus/langavatn1.png"}
            alt={`Langavatn Main Image`}
            width={1000}
            height={1000}
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="relative flex flex-col justify-between text-left w-full md:w-1/2">
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-main">
            LANGAVATN
          </h3>
          <span className="text-xl text-slate-200 opacity-60 block mt-2">
            50-120 m²
          </span>
          <ul className="mt-7 tracking-widest font-light mb-7 space-y-2">
            <li>2-3 Svefnherbergi</li>
            <li>1-2 Baðherbergi með sturtu</li>
            <li>Eldhús með innréttingum og tækjum</li>
            <li>Einhalli eða tvíhalli á þaki</li>
            <li>Sérhannað eftir þörf</li>
            <li>Lengd og breidd hússins breytanleg</li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between ">
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/sumarhus/langavatn3.png"}
            alt={`myvatn 2 Main Image`}
            width={250}
            height={250}
            sizes="100vw"
            className="object-contain pb-10"
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/sumarhus/langavatn2.png"}
            alt={`myvatn 2 Main Image`}
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
