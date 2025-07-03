import ContactCard from "../sumarhus/sumarhusin/ContactCard";
import MyvatnInfo from "../sumarhus/sumarhusin/Myvatn";
import Price from "../sumarhus/sumarhusin/PriceMyvatn";
import Qualities from "../sumarhus/sumarhusin/Qualities";

export default function Myvatn() {
  return (
    <div>
      <MyvatnInfo />
      <Qualities />
      <Price />
      <ContactCard />
    </div>
  );
}
