import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logoMain from "@/assets/logo-soldias-main.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoMain} alt="SolDias" className="w-48 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 mb-4">
              Referência em projetos solares sob medida em Belém e região.
              Energia limpa, economia garantida.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-solar-orange">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5591000000000"
                className="flex items-center gap-2 hover:text-solar-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(91) 0000-0000</span>
              </a>
              <a
                href="mailto:contato@soldias.com.br"
                className="flex items-center gap-2 hover:text-solar-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@soldias.com.br</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Belém, Pará - Brasil<br />Atendimento em toda região metropolitana</span>
              </div>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-solar-orange">Siga-nos</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-solar-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-solar-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm space-y-2">
              <p className="opacity-90">
                <strong>Horário de Atendimento:</strong>
              </p>
              <p className="opacity-75">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 13h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>
            © {currentYear} SolDias Energia Solar. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            CNPJ: 00.000.000/0001-00 | CREA-PA: 00000000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
