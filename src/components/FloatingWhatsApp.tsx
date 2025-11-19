import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5591000000000";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi o site da SolDias e quero saber mais sobre energia solar!"
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl group-hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          Manda um zap! 💬
        </div>
      </div>

      {/* Pulsing Ring */}
      <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75" />
    </a>
  );
};

export default FloatingWhatsApp;
