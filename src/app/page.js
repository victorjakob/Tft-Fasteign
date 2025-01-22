import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import HeroHome from "./components/homepage/HeroHome";
import WhoWeAre from "./components/homepage/WhoWeAre";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <About />
      <WhoWeAre />
      <Contact />
    </div>
  );
}
