import ContactCard from "../sumarhus/sumarhusin/ContactCard";
import Langavatn from "../sumarhus/sumarhusin/Langavatn";
import PriceLangavatn from "../sumarhus/sumarhusin/PriceLangavatn";
import Qualities from "../sumarhus/sumarhusin/Qualities";

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
