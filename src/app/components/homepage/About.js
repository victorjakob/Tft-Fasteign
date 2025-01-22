"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Import Heroicons

export default function About() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: "Bókhald og reikningshald",
      description:
        "Við bjóðum upp á heildstæða bókhaldsþjónustu fyrir fyrirtæki af öllum stærðum. Nákvæmni og fagmennska eru okkar aðalsmerki.",
    },
    {
      title: "Ráðgjöf varðandi skattamál",
      description:
        "Sérfræðingar okkar veita alhliða skattaráðgjöf og aðstoða við skattaskil fyrir einstaklinga og fyrirtæki.",
    },
    {
      title: "Fjármálaráðgjöf og rekstrargreiningar",
      description:
        "Við hjálpum þér að greina fjárhagsstöðu þíns fyrirtækis og veitum ráðgjöf um hvernig hægt er að bæta reksturinn.",
    },
    {
      title: "Ráðgjöf varðandi lífeyrismál",
      description:
        "Fagleg ráðgjöf um lífeyrissjóði, sparnað og tryggingar til að tryggja fjárhagslegt öryggi þitt til framtíðar.",
    },
  ];

  return (
    <div className="w-full bg-foreground py-20 text-second">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-16 md:flex-row md:gap-8">
        {/* Left Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-4xl font-extralight tracking-tight md:text-left lg:text-5xl"
          >
            Fagleg Þjónusta
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full justify-center md:w-auto lg:justify-end"
          >
            <Link
              href="/contact"
              className="inline-block w-[70%] rounded-3xl bg-white px-8 py-4 text-center text-base font-light tracking-wide text-black transition-colors hover:bg-slate-300 md:w-auto"
            >
              Hafa Samband
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full justify-center md:w-auto lg:justify-end"
          >
            <Link
              href="/services"
              className="mt-4 inline-block w-[70%] rounded-3xl border-2 border-white px-8 py-4 text-center text-base font-light tracking-wide text-white transition-colors hover:text-black hover:text-slate-200 md:w-auto"
            >
              Þjónustur Okkar
            </Link>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-96 md:w-1/2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="cursor-pointer border-b border-gray-300 py-6 last:border-b-0"
              initial={false}
              onClick={() =>
                setExpandedSection(expandedSection === index ? null : index)
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-light tracking-wide md:text-xl">
                  {section.title}
                </h3>
                <motion.span
                  animate={{ rotate: expandedSection === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  <ChevronDownIcon className="h-6 w-6 text-gray-400" />{" "}
                  {/* Beautiful Chevron Arrow */}
                </motion.span>
              </div>
              <AnimatePresence>
                {expandedSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 font-light leading-relaxed text-gray-200">
                      {section.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
