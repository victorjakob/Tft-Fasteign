export default function Testimonials({ sauna }) {
  // Props: sauna { testimonials }
  const testimonials = sauna?.testimonials || [
    {
      name: "Jón Jónsson",
      location: "Reykjavík",
      text: "Frábær sauna, endingargóð og falleg!",
    },
    {
      name: "Anna Sigurðardóttir",
      location: "Akureyri",
      text: "Þjónustan var til fyrirmyndar og afhendingin hröð.",
    },
    {
      name: "Magnús Magnússon",
      location: "Selfoss",
      text: "Ég mæli hiklaust með þessum gufubaði!",
    },
  ];
  return (
    <section className="w-full max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
        Umsagnir viðskiptavina
      </h2>
      <div className="flex flex-col gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/70 rounded-lg p-5 shadow flex flex-col items-center"
          >
            <p className="text-lg text-gray-800 mb-2 text-center">“{t.text}”</p>
            <span className="text-sm text-gray-600">
              — {t.name}, {t.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
