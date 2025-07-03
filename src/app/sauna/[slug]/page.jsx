import Hero from "./components/Hero";
import QuickSpecs from "./components/QuickSpecs";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import LogicalInfo from "./components/LogicalInfo";
import Order from "./components/Order";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FooterReassurance from "./components/FooterReassurance";
import { supabase } from "../../../utils/supabaseClient";
import LoadingSpinner from "@/utils/LoadingSpinner";
import Script from "next/script";

// --- SEO: Dynamic metadata for sauna product page ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: sauna } = await supabase
    .from("tft_saunas")
    .select("name, description, image_url, slug, base_price")
    .eq("slug", slug)
    .single();

  if (!sauna) {
    return {
      title: "Sauna finnst ekki | TFT Fasteign",
      description: "Þessi sauna er ekki til.",
    };
  }

  return {
    title: sauna.name + " | Sauna til sölu | TFT Fasteign",
    description: sauna.description,
    openGraph: {
      title: sauna.name + " | Sauna til sölu | TFT Fasteign",
      description: sauna.description,
      url: `https://www.tft.is/sauna/${sauna.slug}`,
      images: [
        {
          url: sauna.image_url,
          width: 1200,
          height: 630,
          alt: sauna.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: sauna.name + " | Sauna til sölu | TFT Fasteign",
      description: sauna.description,
      images: [sauna.image_url],
    },
    alternates: {
      canonical: `https://www.tft.is/sauna/${sauna.slug}`,
    },
  };
}

export default async function SaunaProductPage({ params }) {
  const { slug } = await params;
  // Fetch sauna by slug
  const { data: sauna, error } = await supabase
    .from("tft_saunas")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Sauna not found</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!sauna) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {/* SEO: Product structured data for Google rich results */}
      <Script id="sauna-product-ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: sauna.name,
          description: sauna.description,
          image: sauna.image_url,
          sku: sauna.slug,
          offers: {
            "@type": "Offer",
            price: sauna.base_price,
            priceCurrency: "ISK",
            availability: "https://schema.org/InStock",
            url: `https://www.tft.is/sauna/${sauna.slug}`,
          },
        })}
      </Script>
      <main className="bg-foreground min-h-screen">
        {/* Visually hidden h1 for SEO if not present in Hero */}
        <h1 className="sr-only">{sauna.name}</h1>
        <Hero sauna={sauna} />
        <QuickSpecs sauna={sauna} />
        <Description sauna={sauna} />
        <Gallery sauna={sauna} />
        <LogicalInfo sauna={sauna} />
        <Order sauna={sauna} />
        <FooterReassurance />
      </main>
    </>
  );
}
