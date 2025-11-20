import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import promoBg from "../assets/promo-section.jpg";

const Promotion = () => {
  return (
    <section
      className="py-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${promoBg})` }}
    >
      {/* overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/45 dark:bg-black/50" />

      <div className="container mx-auto px-4 flex items-center justify-center md:justify-end relative z-10">
        <div className="max-w-lg text-center md:text-right text-white">
          <div className="md:hidden">{/* mobile: ícone acima do título */}
            <Zap className="block mx-auto mb-3 text-solar-orange w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2 drop-shadow flex items-center justify-center md:justify-end">
            <Zap className="hidden md:inline-block mr-2 align-middle text-solar-orange w-6 h-6" />
            Promoção Relâmpago Solar!
          </h2>
          <p className="text-lg mb-4 text-white/90">
            Feche seu projeto solar este mês e ganhe <strong>10% de desconto</strong> na instalação!
          </p>
          <a
            href="https://wa.me/5591000000000?text=Ol%C3%A1%2C%20gostaria%20do%20desconto%20da%20Promo%C3%A7%C3%A3o%20Rel%C3%A2mpago%20Solar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp"
          >
            <Button size="lg" className="bg-solar-orange text-white hover:bg-solar-orange-light dark:text-black">
              Quero Meu Desconto Agora!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promotion;

