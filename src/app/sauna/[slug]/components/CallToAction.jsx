export default function CallToAction({ sauna }) {
  return (
    <section className="w-full max-w-2xl mx-auto py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
        Fá tilboð eða hringingu
      </h2>
      <form
        className="w-full flex flex-col gap-4 bg-white/60 rounded-lg p-6 shadow"
        aria-label="Fá tilboð eða hringingu"
      >
        <label htmlFor="cta-name" className="sr-only">
          Nafn
        </label>
        <input
          className="border rounded px-3 py-2"
          type="text"
          id="cta-name"
          placeholder="Nafn"
        />
        <label htmlFor="cta-email" className="sr-only">
          Netfang
        </label>
        <input
          className="border rounded px-3 py-2"
          type="email"
          id="cta-email"
          placeholder="Netfang"
        />
        <label htmlFor="cta-phone" className="sr-only">
          Sími
        </label>
        <input
          className="border rounded px-3 py-2"
          type="tel"
          id="cta-phone"
          placeholder="Sími"
        />
        <label htmlFor="cta-comment" className="sr-only">
          Athugasemdir
        </label>
        <textarea
          className="border rounded px-3 py-2"
          id="cta-comment"
          placeholder="Athugasemdir"
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
        >
          Senda fyrirspurn
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Við svörum innan 24 klst. – engin skuldbinding fylgir fyrirspurn.
      </p>
    </section>
  );
}
