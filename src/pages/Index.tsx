import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import NosMove from "@/components/NosMove";
import Technology from "@/components/Technology";
import Promotion from "@/components/Promotion";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Process />
      <Benefits />
      <NosMove />
      <Portfolio />
      <Technology />
      <Promotion />
      <Calculator />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
