"use client";
import {
  UsersIcon,
  Trees,
  FlameIcon,
  LayoutIcon,
  X,
  InfoIcon,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickSpecs({ sauna }) {
  const [showDetailedSpecs, setShowDetailedSpecs] = useState(false);
  const hasSizes = Array.isArray(sauna?.sizes) && sauna.sizes.length > 0;

  // All spec items in an array for easy mapping
  const specs = [
    {
      icon: <UsersIcon className="w-8 h-8 text-green-700" />,
      label: "Rúmar",
      value: sauna?.capacity || "no information available",
      expandable: false,
    },
    {
      icon: <Trees className="w-8 h-8 text-green-700" />,
      label: "Viðartegund",
      value: sauna?.woodType || "no information available",
      expandable: false,
    },
    {
      icon: <FlameIcon className="w-8 h-8 text-green-700" />,
      label: "Ofn",
      value: sauna?.heaterType || "No information available",
      expandable: false,
    },
    {
      icon: <LayoutIcon className="w-8 h-8 text-green-700" />,
      label: "Stærð og Mál",
      value: (
        <span className="text-gray-600">
          {sauna?.size || "No size information available"}
        </span>
      ),
      expandable: hasSizes,
    },
  ];

  // Framer Motion variants for container and cards
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.13,
      },
    },
  };
  const card = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 16 },
    },
  };

  return (
    <>
      <section className="w-full max-w-5xl mx-auto py-10 mt-3 px-4">
        {/* On md+ screens: flex with separators. On small: grid */}
        <motion.div
          className="flex flex-col md:flex-row md:items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          {specs.map((spec, i) => (
            <React.Fragment key={spec.label}>
              <SpecCard
                {...spec}
                variants={card}
                onClick={() => spec.expandable && setShowDetailedSpecs(true)}
              />
              {i < specs.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gray-200 self-center mx-2" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Detailed Specifications Modal */}
      <AnimatePresence>
        {showDetailedSpecs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetailedSpecs(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
            >
              <div className="absolute right-3 top-3">
                <button
                  onClick={() => setShowDetailedSpecs(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              <div className="text-center mb-5">
                <h3 className="text-xl font-medium text-gray-900">
                  Stærðir og mál
                </h3>
              </div>

              <div className="space-y-2.5">
                {sauna?.sizes?.map((size, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={index}
                    className="text-center"
                  >
                    <div className="text-base text-gray-600 py-2">{size}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SpecCard({ icon, label, value, variants, expandable, onClick }) {
  return (
    <motion.div
      className={`flex-1 flex flex-col items-center text-center px-4 py-5 ${
        expandable
          ? "cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
          : ""
      }`}
      variants={variants}
      whileHover={{
        scale: expandable ? 1.045 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      onClick={onClick}
    >
      <div className="mb-2">{icon}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
        {label}
      </div>
      <div className="text-md font-medium text-gray-800">{value}</div>
      {expandable && (
        <div className="flex flex-col items-center mt-1">
          <InfoIcon className="w-4 h-4 text-green-700 mb-0.5" />
          <div className="text-xs text-green-700">
            Smelltu fyrir meiri upplýsingar
          </div>
        </div>
      )}
    </motion.div>
  );
}
