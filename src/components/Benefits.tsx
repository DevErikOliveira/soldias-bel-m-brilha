import { Shield, TrendingDown, Home, Leaf, CreditCard, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Economia de até 95%",
      description: "Reduza drasticamente sua conta de luz e tenha previsibilidade de gastos",
    },
    {
      icon: Home,
      title: "Valorização do Imóvel",
      description: "Imóveis com energia solar valem até 30% mais no mercado",
    },
    {
      icon: CreditCard,
      title: "Financiamento Disponível",
      description: "Opções de crédito via Caixa, BNDES e bancos regionais",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Energia limpa e renovável, contribuindo com o meio ambiente",
    },
    {
      icon: Award,
      title: "Garantia de 25 Anos",
      description: "Equipamentos de marcas Tier 1 com garantia estendida",
    },
    {
      icon: Shield,
      title: "Suporte Local",
      description: "Equipe técnica em Belém para qualquer necessidade",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher <span className="text-solar-orange">Energia Solar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investimento inteligente que se paga sozinho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-solar-orange transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-solar-orange/10 rounded-lg flex items-center justify-center group-hover:bg-solar-orange/20 transition-colors">
                    <Icon className="w-7 h-7 text-solar-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Financing Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-solar-orange/10 to-solar-orange/5 border-2 border-solar-orange/30">
            <CardContent className="p-8">
              <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                <div className="flex-shrink-0 mt-0 md:mt-1">
                  <CreditCard className="w-14 h-14 text-solar-orange mx-auto md:mx-0" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-3">Linhas de Crédito Especiais</h3>
                  <p className="text-lg mb-4 text-muted-foreground">
                    Não deixe o custo inicial te impedir! Temos parceria com:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-center md:text-left">
                    <li className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-solar-orange rounded-full mr-3"></span>
                      <span className="text-left">
                        <strong>Caixa Econômica:</strong>&nbsp;Financiamento com taxas reduzidas
                      </span>
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-solar-orange rounded-full mr-3"></span>
                      <span className="text-left">
                        <strong>BNDES:</strong>&nbsp;Linhas especiais para energia renovável
                      </span>
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-solar-orange rounded-full mr-3"></span>
                      <span className="text-left">
                        <strong>Bancos Regionais:</strong>&nbsp;Opções adaptadas ao mercado paraense
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-solar-orange">
                    💡 A parcela do financiamento pode ser menor que sua conta de luz atual!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
