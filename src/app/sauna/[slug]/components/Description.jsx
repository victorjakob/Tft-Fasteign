"use client";
import { CheckCircle, Quote } from "lucide-react"; // Or your preferred icon set
import { motion } from "framer-motion";

export default function Description({ sauna }) {
  const features = sauna?.features || [
    "Hágæða efni og vandað handverk",
    "Kemur tilbúin beint að dyrum",
    "Auðvelt viðhald og endingargott",
  ];

  // Framer Motion variants for staggered animation
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 16 },
    },
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-6 pb-16 scroll-mt-24">
      {/* Intro */}
      <p className="text-lg sm:text-2xl md:text-3xl font-light text-center text-green-800 mb-6 sm:mb-8 leading-relaxed">
        {sauna?.emotionalIntro ||
          "Stílhrein hönnun sem hentar bæði sumarhúsum og heimilum"}
      </p>

      {/* Responsive flex row for description and features */}
      <div className="flex flex-col md:flex-row md:gap-8 gap-6">
        {/* Full Description */}
        {sauna?.full_description && (
          <div className="md:w-1/2 flex flex-col justify-center mb-0">
            <div className="relative bg-white/90 md:bg-transparent rounded-2xl shadow-sm md:shadow-none px-4 py-6 md:p-0 mb-2 md:mb-0">
              <Quote
                className="absolute -left-4 -top-4 w-8 h-8 text-green-200 opacity-40 hidden md:block"
                aria-hidden="true"
              />
              <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {sauna.full_description}
              </p>
            </div>
          </div>
        )}

        {/* Optional vertical divider on large screens */}
        <div className="hidden md:block w-px bg-gray-200 mx-2" />

        {/* Features list with animation */}
        <div className="md:w-1/2">
          <motion.ul
            className="grid gap-3 sm:gap-4 rounded-2xl shadow-sm md:shadow-none px-4 py-6 md:p-0"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 sm:gap-4"
                variants={itemVariants}
              >
                <CheckCircle
                  className="w-6 h-6 text-green-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-gray-700 text-base sm:text-base leading-snug">
                  {feature}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
