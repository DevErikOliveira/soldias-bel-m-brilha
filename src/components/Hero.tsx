import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-solar-belem.jpg";
import logoMain from "@/assets/logo-soldias-main.jpg";

const Hero = () => {
  const whatsappNumber = "5591000000000"; // Número do WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero saber mais sobre energia solar em Belém!"
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Energia Solar em Belém"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl">
          {/* Logo */}
          <img
            src={logoMain}
            alt="SolDias Energia Solar"
            className="w-64 mb-8"
          />

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cansado da Conta de Luz Alta no Pará?{" "}
            <span className="text-solar-orange">Instale Solar!</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Economia de até <span className="text-solar-orange font-bold">95%</span> na sua conta.
            Projetos sob medida por Engenheiros em Belém.
          </p>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-solar-orange hover:bg-solar-orange-light text-white text-lg px-8 py-6 rounded-full shadow-2xl transform transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Quero Economizar Agora!
            </Button>
          </a>

          {/* Trust Badge */}
          <p className="text-white/70 mt-6 text-sm">
            ✓ Atendimento rápido em Belém e região metropolitana
          </p>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
