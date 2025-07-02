export default function FAQ({ sauna }) {
  // Props: sauna { faq }
  const faq = sauna?.faq || [
    {
      q: "Er uppsetning innifalin?",
      a: "Já, uppsetning er innifalin á höfuðborgarsvæðinu.",
    },
    {
      q: "Er gufubaðið vetrarþolið?",
      a: "Já, það er hannað fyrir íslenskar aðstæður.",
    },
    {
      q: "Þarf viðhald?",
      a: "Viðhald er lítið, en mælt er með reglulegri þrifum.",
    },
    {
      q: "Hversu lengi tekur að hita?",
      a: "Venjulega tekur 30–60 mínútur að ná réttu hitastigi.",
    },
  ];
  return (
    <section className="w-full max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
        Algengar spurningar
      </h2>
      <div className="flex flex-col gap-4">
        {faq.map((item, i) => (
          <div key={i} className="bg-white/60 rounded-lg p-4 shadow">
            <p className="font-semibold text-gray-800 mb-1">{item.q}</p>
            <p className="text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
