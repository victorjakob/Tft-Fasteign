import ContactCard from "../components/sumarhusin/ContactCard";
import Langavatn from "../components/sumarhusin/Langavatn";
import PriceLangavatn from "../components/sumarhusin/PriceLangavatn";
import Qualities from "../components/sumarhusin/Qualities";

export default function Myvatn() {
  return (
    <div>
      <Langavatn />
      <Qualities />
      <PriceLangavatn />
      <ContactCard />
    </div>
  );
}
