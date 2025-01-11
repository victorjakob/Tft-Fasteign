import ContactCard from "../components/sumarhusin/ContactCard";
import MyvatnInfo from "../components/sumarhusin/Myvatn";
import Price from "../components/sumarhusin/PriceMyvatn";
import Qualities from "../components/sumarhusin/Qualities";

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
