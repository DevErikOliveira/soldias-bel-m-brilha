import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Calculator />
      <Process />
      <Benefits />
      <Portfolio />
      <Technology />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
