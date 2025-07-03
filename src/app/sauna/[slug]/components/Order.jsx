"use client";
import { useState, useMemo } from "react";
import { formatISK } from "@/utils/formatCurrency";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Edit } from "lucide-react";

export default function PlaceOrder({ sauna }) {
  const base_price = sauna?.base_price;
  const addons = sauna?.addons || [
    {
      name: "Ósamsett afhending",
      price: 0,
      description: "Afhending ósamsett ef óskað er, hentugt fyrir fjallaskála.",
    },
  ];

  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function toggleAddon(name) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  function handleInput(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const selectedAddons = addons.filter((a) => selected.includes(a.name));
      const res = await fetch("/api/send-email-sauna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          comment: form.comment,
          sauna: {
            name: sauna?.name,
            base_price: sauna?.base_price,
            slug: sauna?.slug,
          },
          selectedAddons: selectedAddons.map((a) => ({
            name: a.name,
            price: a.price,
          })),
          totalPrice,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", comment: "" });
        setSelected([]);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const totalPrice = useMemo(
    () =>
      (base_price || 0) +
      addons
        .filter((a) => selected.includes(a.name))
        .reduce((sum, a) => sum + (a.price || 0), 0),
    [base_price, selected, addons]
  );

  // Framer Motion variants for staggered children
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.11,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 },
    },
  };

  // Modal close handler
  function closeModal() {
    setStatus(null);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-8 px-2 sm:px-0">
      {/* Success Modal */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                aria-label="Loka"
              >
                ×
              </button>
              <svg
                className="w-14 h-14 mb-4 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="#bbf7d0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
              </svg>
              <div className="text-2xl font-bold mb-2 text-green-900">
                Pöntun móttekin!
              </div>
              <div className="text-green-800 text-base text-center mb-4">
                Við höfum móttekið pöntunina þína og munum hafa samband
                fljótlega með staðfestingu og nánari upplýsingar.
              </div>
              <button
                onClick={closeModal}
                className="mt-2 px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-800 transition"
              >
                Loka
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section
        id="customization"
        className="w-full max-w-2xl mx-auto flex flex-col gap-6"
      >
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 text-center drop-shadow-sm">
            Panta þína Sánu
          </h2>
          <p className="text-center text-base sm:text-lg font-light text-green-800/80 mb-2">
            Sendu okkur fyrirspurn og við svörum fljótt!
          </p>
        </motion.div>

        {/* Total Price Card */}
        <motion.div
          className="w-full bg-white rounded-2xl shadow-lg flex flex-col items-center py-5 px-6 border border-green-100"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 18,
          }}
        >
          <span className="text-sm font-medium text-green-700 mb-1 tracking-wide">
            Heildarverð:
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-green-900">
            {formatISK(totalPrice)}
          </span>
        </motion.div>

        {/* Form Card */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 flex flex-col gap-5 border border-green-100"
          name="sauna-order"
          onSubmit={handleSubmit}
          autoComplete="on"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          aria-label="Pöntunarform fyrir saunu"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div variants={item} className="relative">
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-green-900 mb-1"
              >
                Nafn
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-300" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  className="w-full border border-green-200 bg-green-50 text-green-900 rounded-lg pl-9 pr-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                  autoComplete="name"
                  required
                />
              </div>
            </motion.div>
            <motion.div variants={item} className="relative">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-green-900 mb-1"
              >
                Netfang
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-300" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  className="w-full border border-green-200 bg-green-50 text-green-900 rounded-lg pl-9 pr-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                  autoComplete="email"
                  required
                />
              </div>
            </motion.div>
            <motion.div variants={item} className="relative">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-green-900 mb-1"
              >
                Sími
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-300" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInput}
                  className="w-full border border-green-200 bg-green-50 text-green-900 rounded-lg pl-9 pr-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                  autoComplete="tel"
                  required
                />
              </div>
            </motion.div>
          </div>
          <motion.div variants={item}>
            <label
              htmlFor="comment"
              className="block text-xs font-semibold text-green-900 mb-1"
            >
              Athugasemd (valkvætt)
            </label>
            <div className="relative">
              <Edit className="absolute left-3 top-3 w-4 h-4 text-green-300" />
              <textarea
                id="comment"
                name="comment"
                value={form.comment}
                onChange={handleInput}
                rows={3}
                className="w-full border border-green-200 bg-green-50 text-green-900 rounded-lg pl-9 pr-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                placeholder="Eitthvað sem þú vilt taka fram eða ert þú með spurningu?"
                autoComplete="off"
              />
            </div>
          </motion.div>
          {/* Sticky submit button on mobile */}
          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 hover:from-emerald-700 hover:to-green-700 text-white font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 border-none shadow-md mt-2"
            variants={item}
            style={{ position: "sticky", bottom: 0, zIndex: 10 }}
          >
            SENDA FYRIRSPURN
          </motion.button>
        </motion.form>

        {/* Addons Section */}
        <motion.div
          className="flex flex-col gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <h3 className="text-lg font-semibold text-green-900 mb-2 mt-2 sm:mt-4">
            Breytingar á saununni
          </h3>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {addons.map((addon) => {
              const isSelected = selected.includes(addon.name);
              return (
                <motion.button
                  key={addon.name}
                  type="button"
                  onClick={() => toggleAddon(addon.name)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 text-base transition-all duration-200 shadow-sm flex flex-col gap-2
                    ${
                      isSelected
                        ? "border-green-400 bg-green-50"
                        : "border-green-100 bg-white hover:border-green-400"
                    }
                    focus:outline-none focus:ring-2 focus:ring-green-700`}
                  aria-pressed={isSelected}
                  variants={item}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-green-900">
                      {addon.name}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold px-2 py-0.5 rounded ${
                        addon.price === 0
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-green-900 text-green-100"
                      }`}
                    >
                      {addon.price === 0 ? "Frítt" : formatISK(addon.price)}
                    </span>
                  </div>
                  <div className="text-green-700 text-xs sm:text-sm mb-1">
                    {addon.description}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition
                        ${
                          isSelected
                            ? "border-green-400 bg-green-500"
                            : "border-green-200 bg-white"
                        }`}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs text-green-500">
                      {isSelected ? "Valið" : "Smelltu til að velja"}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* After the form, show feedback message */}
        {status === "error" && (
          <div className="mt-4 text-red-600 text-center font-semibold">
            Eitthvað fór úrskeiðis. Reyndu aftur síðar.
          </div>
        )}
        {loading && (
          <div className="mt-4 text-green-800 text-center font-medium animate-pulse">
            Senda pöntun...
          </div>
        )}
      </section>
    </div>
  );
}
