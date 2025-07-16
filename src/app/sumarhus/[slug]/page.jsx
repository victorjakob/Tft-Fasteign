import { supabase } from "@/utils/supabaseClient";
import SummerhouseDetails from "@/app/sumarhus/components/SummerhouseDetails";
import Qualities from "../components/Qualities";
import ContactCard from "../components/ContactCard";
import PriceMyvatn from "../components/PriceMyvatn";
import PriceLangavatn from "../components/PriceLangavatn";

export default async function SummerhousePage({ params }) {
  const { slug } = params;
  const { data, error } = await supabase
    .from("tft_summerhouses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return <div>Error loading data: {error?.message || "Not found"}</div>;
  }

  // Choose the correct price component based on slug
  let PriceComponent = null;
  if (slug === "myvatn") PriceComponent = PriceMyvatn;
  if (slug === "langavatn") PriceComponent = PriceLangavatn;

  return (
    <div>
      <SummerhouseDetails
        name={data.name}
        area={data.area}
        features={data.features}
        mainImage={data.main_image}
        otherImages={data.other_images}
        bgTitle={data.bg_title}
        priceNoVsk={data.price_no_vsk}
      />
      <Qualities />
      {PriceComponent && <PriceComponent />}
      <ContactCard />
    </div>
  );
}
