import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Audience from "./components/Audience";
import Catalog from "./components/Catalog";
import VisionMission from "./components/VisionMission";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import About from "./components/About";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <Catalog />
        <VisionMission />
        <WhyUs />
        <Products />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
}
