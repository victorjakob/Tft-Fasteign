"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ sauna }) {
  const images = sauna?.all_images || [];
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [direction, setDirection] = useState(0);
  const closeBtnRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (!lightbox.open) return;
    closeBtnRef.current?.focus();
    function handleKey(e) {
      if (e.key === "Escape") setLightbox((l) => ({ ...l, open: false }));
      if (e.key === "ArrowRight") {
        setDirection(1);
        setLightbox((l) => ({ ...l, index: (l.index + 1) % images.length }));
      }
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setLightbox((l) => ({
          ...l,
          index: (l.index - 1 + images.length) % images.length,
        }));
      }
      if (e.key === "Tab") {
        const focusables = [
          closeBtnRef.current,
          leftBtnRef.current,
          rightBtnRef.current,
        ].filter(Boolean);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightbox.open, images.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection(1);
      setLightbox((l) => ({ ...l, index: (l.index + 1) % images.length }));
    },
    onSwipedRight: () => {
      setDirection(-1);
      setLightbox((l) => ({
        ...l,
        index: (l.index - 1 + images.length) % images.length,
      }));
    },
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  if (!images.length) return null;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      zIndex: 0,
      transition: { type: "tween", duration: 0.25, ease: "easeInOut" },
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      transition: { type: "tween", duration: 0.25, ease: "easeInOut" },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      zIndex: 0,
      transition: { type: "tween", duration: 0.25, ease: "easeInOut" },
    }),
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={img}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group"
            onClick={() => {
              setDirection(0);
              setLightbox({ open: true, index: i });
            }}
          >
            <Image
              src={img}
              alt={`Sauna mynd ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw, 25vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
          </div>
        ))}
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox({ ...lightbox, open: false })}
            aria-label="Loka myndasafni með því að smella utan myndar"
          />
          <div
            className="relative flex items-center justify-center h-full px-2"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            ref={modalContentRef}
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-xs sm:text-base bg-black/40 rounded-full px-4 py-1 z-20 select-none pointer-events-none">
              {lightbox.index + 1} / {images.length}
            </div>
            <button
              type="button"
              ref={closeBtnRef}
              className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-4xl sm:text-5xl bg-black/40 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none hover:bg-black/60 transition"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox({ ...lightbox, open: false });
              }}
              aria-label="Loka myndasafni"
            >
              &times;
            </button>
            <div
              {...swipeHandlers}
              className="relative w-full max-w-lg sm:max-w-2xl md:max-w-5xl max-h-[80vh] aspect-square sm:aspect-video flex items-center justify-center"
            >
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={lightbox.index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={images[lightbox.index]}
                    alt={`Sauna mynd ${lightbox.index + 1}`}
                    fill
                    className="object-contain rounded-2xl shadow-xl"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                type="button"
                ref={leftBtnRef}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl px-3 py-3 bg-black/40 hover:bg-black/60 rounded-full focus:outline-none transition z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(-1);
                  setLightbox({
                    open: true,
                    index: (lightbox.index - 1 + images.length) % images.length,
                  });
                }}
                aria-label="Fyrri mynd"
              >
                &#8592;
              </button>
              <button
                type="button"
                ref={rightBtnRef}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl px-3 py-3 bg-black/40 hover:bg-black/60 rounded-full focus:outline-none transition z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(1);
                  setLightbox({
                    open: true,
                    index: (lightbox.index + 1) % images.length,
                  });
                }}
                aria-label="Næsta mynd"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
