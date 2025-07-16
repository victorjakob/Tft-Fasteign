"use client";
import Image from "next/image";

export default function SummerhouseDetails({
  name,
  area,
  features,
  mainImage,
  otherImages,
  bgTitle,
  priceNoVsk,
}) {
  return (
    <div className="pt-40 relative mb-20 max-w-[95%] lg:max-w-[80%] mx-auto bg-background text-main rounded-lg overflow-hidden">
      {/* Background Title */}
      <h3 className="absolute top-40 right-4 md:right-12 text-4xl md:text-6xl font-bold text-gray-200 opacity-10 z-0 whitespace-nowrap">
        {bgTitle || name}
      </h3>
      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-4 md:p-8 z-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={mainImage}
            alt={`${name} Main Image`}
            width={1000}
            height={1000}
            sizes="100vw"
            className="object-contain"
          />
        </div>
        {/* Details Section */}
        <div className="relative flex flex-col justify-between text-left w-full md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-main">{name}</h3>
          <span className="text-lg md:text-xl text-slate-200 opacity-60 block mt-2">
            {area}
          </span>
          {priceNoVsk && (
            <span className="text-lg md:text-lg text-slate-200 font-extralight block mt-1 mb-2">
              Verð án vsk: {priceNoVsk.toLocaleString("is-IS")} kr.
            </span>
          )}
          <ul className="mt-4 md:mt-7 tracking-widest font-light mb-4 md:mb-7 space-y-2">
            {features && features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      </div>
      {/* Additional Images Section */}
      {otherImages && otherImages.length > 0 && (
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-14 p-4 md:p-8">
          {otherImages.map((img, i) => (
            <div className="relative w-full md:w-1/2" key={i}>
              <Image
                src={img}
                alt={`${name} Image ${i + 2}`}
                width={1000}
                height={1000}
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
