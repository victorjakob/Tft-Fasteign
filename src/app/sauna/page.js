export const dynamic = "force-dynamic";

import { supabase } from "../../utils/supabaseClient";
import SaunaCard from "./components/SaunaCard";
import SaunaHeader from "./components/Header";
import LoadingSpinner from "@/utils/LoadingSpinner";
import Script from "next/script";

// --- SEO: Metadata for this page ---
export const generateMetadata = () => ({
  title: "Saunur til sölu | Topp gæði og frábært verð",
  description:
    "Skoðaðu úrvalið af vönduðum saunum hjá TFT Fasteign. Hágæða saunur á frábæru verði. Pantaðu þína saunu í dag!",
  openGraph: {
    title: "Saunur til sölu | Topp gæði og frábært verð",
    description:
      "Skoðaðu úrvalið af vönduðum saunum hjá TFT Fasteign. Hágæða saunur á frábæru verði. Pantaðu þína saunu í dag!",
    url: "https://www.tft.is/sauna",
    siteName: "TFT Fasteign",
    images: [
      {
        url: "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1747941583/Lu%CC%81xus_gufa_vhaqir.jpg", // Make sure this path is correct and public
        width: 800,
        height: 600,
        alt: "TFT Fasteign - Saunur",
      },
    ],
    locale: "is_IS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saunur til sölu | Topp gæði og frábært verð | TFT Fasteign",
    description:
      "Skoðaðu úrvalið af vönduðum saunum hjá TFT Fasteign. Hágæða saunur á frábæru verði. Pantaðu þína saunu í dag!",
    images: [
      "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1747941583/Lu%CC%81xus_gufa_vhaqir.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.tft.is/sauna",
  },
});

export default async function SaunasPage() {
  // Fetch sauna data from Supabase
  const { data: saunas, error } = await supabase
    .from("tft_saunas")
    .select("id, name, description, image_url, bg_image_url, base_price, slug")
    .eq("is_active", true);
  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error loading saunas</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!saunas) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Sort saunas by base_price ascending (cheapest first)
  const sortedSaunas = [...saunas].sort(
    (a, b) => (a.base_price || 0) - (b.base_price || 0)
  );

  return (
    <>
      {/* --- SEO: JSON-LD Structured Data for Sauna List --- */}
      <Script id="sauna-list-ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Saunur til sölu",
          itemListElement: sortedSaunas.map((sauna, idx) => ({
            "@type": "Product",
            position: idx + 1,
            name: sauna.name,
            description: sauna.description,
            image: sauna.image_url,
            url: `https://www.tft.is/sauna/${sauna.slug}`,
            offers: {
              "@type": "Offer",
              price: sauna.base_price,
              priceCurrency: "ISK",
              availability: "https://schema.org/InStock",
            },
          })),
        })}
      </Script>
      <main className="mx-auto bg-foreground">
        {/* --- SEO: Main heading for the page --- */}
        <h1 className="sr-only">Saunur til sölu hjá TFT Fasteign</h1>
        <SaunaHeader />
        <div className="grid pt-14 py-12 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedSaunas.map((sauna) => (
            <SaunaCard key={sauna.id} sauna={sauna} />
          ))}
        </div>
      </main>
      {/*
        SEO TIPS:
        - Ensure SaunaCard uses sauna.name for image alt text.
        - Use semantic tags in SaunaCard (e.g., <article>, <h2> for sauna name).
        - Add more relevant keywords to metadata if needed.
        - Consider adding FAQ structured data if you have common questions.
      */}
    </>
  );
}
