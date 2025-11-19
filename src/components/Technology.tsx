import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, Zap } from "lucide-react";

const Technology = () => {
  const certifications = [
    {
      icon: Award,
      title: "Equipamentos Tier 1",
      description: "Painéis e inversores das melhores marcas mundiais",
    },
    {
      icon: Shield,
      title: "Certificações Técnicas",
      description: "Equipe com CREA, NR10, NR35 e treinamentos especializados",
    },
    {
      icon: Users,
      title: "Engenheiros Qualificados",
      description: "Projetos desenvolvidos por profissionais registrados",
    },
    {
      icon: Zap,
      title: "Monitoramento Remoto",
      description: "Acompanhe a geração de energia pelo celular",
    },
  ];

  const brands = [
    "Canadian Solar",
    "Growatt",
    "Jinko Solar",
    "Fronius",
    "ABB",
    "SolarEdge",
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-solar-orange">Tecnologia</span> e Certificações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Qualidade e segurança em cada instalação
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="border-2 hover:border-solar-orange transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-solar-orange/10 rounded-full flex items-center justify-center group-hover:bg-solar-orange/20 transition-colors">
                    <Icon className="w-8 h-8 text-solar-orange" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Brands Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Marcas <span className="text-solar-orange">Tier 1</span> que Utilizamos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-muted rounded-lg border-2 hover:border-solar-orange transition-colors"
                  >
                    <p className="font-semibold text-center">{brand}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-sm text-muted-foreground">
                Todos os equipamentos com garantia do fabricante
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            <strong className="text-solar-orange">A eficiência do seu projeto solar</strong>{" "}
            criada pelas mãos de Engenheiros com experiência regional.
            Conhecemos o clima, as regulamentações e as melhores práticas para Belém.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
