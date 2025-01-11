import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import HeroHome from "./components/homepage/HeroHome";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <About />
      <Contact />
    </div>
  );
}
