import { FileCheck, Wrench, TrendingUp, MessageSquare } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Orçamento Rápido",
      description: "Manda um zap e receba uma proposta personalizada em até 24h",
    },
    {
      icon: FileCheck,
      title: "2. Aprovação",
      description: "Cuidamos de toda a burocracia e documentação necessária",
    },
    {
      icon: Wrench,
      title: "3. Instalação",
      description: "Equipe técnica certificada instala em poucos dias",
    },
    {
      icon: TrendingUp,
      title: "4. Economia!",
      description: "Comece a economizar imediatamente na sua conta de luz",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Processo <span className="text-solar-orange">Descomplicado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rapidez e zero dor de cabeça para o belenense
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-solar-orange/30" />
                )}

                <div className="relative bg-card border-2 border-border hover:border-solar-orange transition-all duration-300 rounded-xl p-6 text-center h-full group-hover:shadow-xl">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-solar-orange/10 rounded-full flex items-center justify-center group-hover:bg-solar-orange/20 transition-colors">
                    <Icon className="w-10 h-10 text-solar-orange" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Do primeiro contato à economia: <span className="font-bold text-solar-orange">tudo pensado pro seu conforto</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
