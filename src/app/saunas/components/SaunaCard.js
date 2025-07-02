"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatISK } from "../../../utils/formatCurrency";

const buttonText = "Panta";

export default function SaunaCard({ sauna }) {
  const [flipped, setFlipped] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [wave, setWave] = useState({ active: false, mouseX: 0, trigger: 0 });
  const buttonRef = useRef(null);

  // Button animates only if card is hovered and image is NOT hovered
  const animateButton = cardHovered && !imageHovered;

  // Mouse enter handler for wind wave (triggers once per enter)
  const handleCardEnter = (e) => {
    setCardHovered(true);
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    setWave({ active: true, mouseX, trigger: Date.now() });
  };

  // Mouse leave handler for wind wave
  const handleCardLeave = () => {
    setCardHovered(false);
    setWave({ active: false, mouseX: 0, trigger: Date.now() });
  };

  // Unique id for accessibility
  const headingId = `sauna-card-title-${sauna.id}`;

  return (
    <article>
      <Link
        href={`/saunas/${sauna.slug}`}
        aria-labelledby={headingId}
        tabIndex={0}
        style={{ textDecoration: "none" }}
      >
        <div
          className="overflow-hidden bg-transparent shadow-none flex flex-col backdrop-blur-sm group cursor-pointer h-full"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
          role="link"
        >
          <div
            className="relative aspect-[5/4] w-full flex items-center justify-center"
            onMouseEnter={() => {
              setFlipped(true);
              setImageHovered(true);
            }}
            onMouseLeave={() => {
              setFlipped(false);
              setImageHovered(false);
            }}
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Image */}
              <div
                className={`absolute inset-0 ${
                  flipped ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300 [backface-visibility:hidden]`}
              >
                <Image
                  fill
                  src={sauna.image_url}
                  alt={sauna.name}
                  className="object-cover rounded-sm shadow-lg border border-white/30"
                  loading="lazy"
                  style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Back Image */}
              <div
                className={`absolute inset-0 ${
                  flipped ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 [backface-visibility:hidden] rotate-y-180`}
              >
                <Image
                  fill
                  src={sauna.bg_image_url || sauna.image_url}
                  alt={sauna.name + " bakhlið"}
                  className="object-cover rounded-sm shadow-lg border border-white/30"
                  loading="lazy"
                  style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className="p-7 flex flex-col flex-1 items-center text-center">
            <div className="flex flex-col gap-1 mb-3 items-center text-center">
              <h2
                id={headingId}
                className="text-xl font-semibold text-green-900 drop-shadow-sm leading-tight"
              >
                {sauna.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {formatISK(sauna.base_price)}
              </p>
            </div>
            <motion.div
              ref={buttonRef}
              className="border text-green-900 border-green-900 font-medium py-1 px-7 rounded-sm hover:bg-green-50 hover:text-green-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 text-center inline-block mt-0 bg-transparent select-none pointer-events-none"
              style={{ alignSelf: "center" }}
              tabIndex={-1}
              aria-hidden="true"
            >
              {buttonText.split("").map((char, i) => {
                // Calculate the center X of each letter
                const letterWidth = 18; // px, adjust as needed for your font
                const letterX = i * letterWidth + letterWidth / 2;
                // Distance from mouse to letter center
                const dist = wave.active ? Math.abs(wave.mouseX - letterX) : 0;
                // The closer to the mouse, the bigger the effect
                const maxDist = 120; // px
                const intensity = Math.max(0, 1 - dist / maxDist);
                return (
                  <motion.span
                    key={i + "-" + wave.trigger}
                    initial={false}
                    animate={
                      wave.active && animateButton
                        ? {
                            y: [-2, -18 * intensity, 0],
                            rotate: [0, 18 * intensity, 0],
                            scale: [1, 1.2 + 0.2 * intensity, 1],
                            color: "#047857",
                          }
                        : { y: 0, rotate: 0, scale: 1, color: "#14532d" }
                    }
                    transition={{
                      duration: 0.5,
                      delay: wave.active && animateButton ? i * 0.03 : 0,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Link>
    </article>
  );
}
