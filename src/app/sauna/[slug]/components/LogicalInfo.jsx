"use client";

import { BadgeCheck, Clock, MapPin, Hammer, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function LogicalInfo({ sauna }) {
  const [expandedId, setExpandedId] = useState("setup");
  const [hoveredId, setHoveredId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Listen for screen size changes
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Determine which card is active (hovered on desktop, expanded on mobile)
  const activeId = isDesktop ? hoveredId || expandedId : expandedId;

  const indicators = [
    {
      id: "setup",
      icon: <Hammer className="w-6 h-6 text-green-700" />,
      label: "Uppsetning\nSauna afhent samsett",
      details: sauna?.setup?.trim()
        ? sauna.setup
        : "Allar saunurnar okkar koma tilbúnar samsettar og eru auðveldar að setja upp. Við getum einnig boðið upp á uppsetningu á staðnum ef þess er óskað. Uppsetningin tekur 1 dag fyrir 2 menn.  ",
    },
    {
      id: "standards",
      icon: <BadgeCheck className="w-6 h-6 text-green-700" />,
      label: "ESB staðlar\nUmhverfisvottað timbur og rafbúnaður.",
      details:
        "Allar saunur okkar uppfylla ströngustu staðla innan Evrópusambandsins. Við notum einungis umhverfisvottað timbur og vottaðan rafbúnað sem stenst allar öryggiskröfur. Þannig tryggjum við að þú fáir ekki aðeins vandaða og langlífa vöru, heldur einnig lausn sem tekur tillit til náttúrunnar.",
    },
    {
      id: "delivery",
      icon: <Clock className="w-6 h-6 text-green-700" />,
      label: "Afhendingartími\nFrá samdægurs upp í 3 vikur",
      details:
        "Við reynum að afhenda saunurnar okkar eins fljótt og mögulegt er. Venjulega getum við afhent innan 1-2 vikna, en það fer eftir fyrirliggjandi pöntunum. Við munum láta þig vita um áætlaðan afhendingartíma þegar þú pantar.",
    },
    {
      id: "location",
      icon: <MapPin className="w-6 h-6 text-green-700" />,
      label: "Afhendingarstaður\nÁ Hafnarbakka, Reykjavík",
      details:
        "Saunan er sótt á Hafnarbakka í Reykjavík, þar sem er gott aðgengi fyrir kerrur, pall- og flutningarbíla.",
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

  const details = {
    hidden: { opacity: 0, paddingTop: 0, paddingBottom: 0 },
    show: {
      opacity: 1,
      paddingTop: 24,
      paddingBottom: 24,
      transition: {
        opacity: { duration: 0.25 },
        paddingTop: { duration: 0.2 },
        paddingBottom: { duration: 0.2 },
        delay: 0.05,
      },
    },
    exit: {
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      transition: { duration: 0.18, opacity: { duration: 0.13 } },
    },
  };

  return (
    <section className="w-full bg-background" aria-label="Upplýsingar um saunu">
      <section className="w-full max-w-4xl mx-auto py-12 px-4">
        <motion.div
          className="flex flex-col md:flex-row md:items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          {indicators.map((item, i) => (
            <React.Fragment key={item.id}>
              <motion.div
                className={`flex-1 flex flex-col items-center text-center px-4 py-5 mb-4 md:mb-0 cursor-pointer rounded-lg transition-colors duration-200 bg-transparent`}
                onClick={() => {
                  if (!isDesktop) {
                    setExpandedId(expandedId === item.id ? null : item.id);
                  }
                }}
                onMouseEnter={() => {
                  if (isDesktop) setHoveredId(item.id);
                }}
                animate={{
                  scale: activeId === item.id ? 1.04 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="mb-2">
                  {React.cloneElement(item.icon, {
                    className: `w-6 h-6 ${
                      activeId === item.id
                        ? "text-emerald-300 drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]"
                        : "text-emerald-400/60"
                    }`,
                  })}
                </div>
                <h3 className="text-xs text-gray-300 uppercase tracking-wide font-semibold mb-1">
                  {item.label.split("\n")[0]}
                </h3>
                <div className="text-md font-medium text-gray-100 whitespace-pre-line">
                  {item.label.split("\n").slice(1).join("\n")}
                </div>
              </motion.div>
              {i < indicators.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-emerald-900/40 self-center mx-2" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
        {/* Full-width details below the row */}
        <div
          className="w-full mt-6  mx-6 text-sm text-gray-300 leading-relaxed  min-h-[80px] md:min-h-[100px] flex items-center"
          style={{ transition: "min-height 0.2s" }}
        >
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-400"></span>
                  <div className="border-l-4 px-2 font-ultralight border-emerald-400/60 pl-4 py-2 bg-emerald-950/30 rounded-md text-base text-gray-200 leading-relaxed">
                    {indicators.find((item) => item.id === activeId)?.details}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
}
