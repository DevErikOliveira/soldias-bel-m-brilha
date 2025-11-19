import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, MapPin } from "lucide-react";
import portfolioResidencial from "@/assets/portfolio-residencial-1.jpg";
import portfolioComercial from "@/assets/portfolio-comercial-1.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolioResidencial,
      type: "Residencial",
      title: "Casa em Belém",
      location: "Belém - PA",
      capacity: "5 kWp",
      savings: "R$ 3.500/ano",
      icon: Home,
    },
    {
      image: portfolioComercial,
      type: "Comercial",
      title: "Edifício Comercial",
      location: "Belém - PA",
      capacity: "50 kWp",
      savings: "R$ 42.000/ano",
      icon: Building,
    },
  ];

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-solar-orange">Projetos</span> em Belém e Região
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiência comprovada com instalações na sua cidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-solar-orange transition-all duration-300 group hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-solar-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-solar-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-1 text-sm">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Potência</p>
                      <p className="font-bold text-lg">{project.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Economia/ano</p>
                      <p className="font-bold text-lg text-solar-orange">{project.savings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted rounded-xl">
            <p className="text-4xl font-bold text-solar-orange mb-2">200+</p>
            <p className="text-sm text-muted-foreground">Projetos em Belém</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-xl">
            <p className="text-4xl font-bold text-solar-orange mb-2">5+</p>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-xl">
            <p className="text-4xl font-bold text-solar-orange mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-xl">
            <p className="text-4xl font-bold text-solar-orange mb-2">24h</p>
            <p className="text-sm text-muted-foreground">Resposta Rápida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
