import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Zap, TrendingUp } from "lucide-react";

const Calculator = () => {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [propertyType, setPropertyType] = useState("pf");
  const [showResult, setShowResult] = useState(false);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    return {
      annual: (bill * 12 * 0.9).toFixed(2), // 90% economia
      monthly: (bill * 0.9).toFixed(2),
      years25: (bill * 12 * 0.9 * 25).toFixed(2),
    };
  };

  const handleCalculate = () => {
    if (monthlyBill && parseFloat(monthlyBill) > 0) {
      setShowResult(true);
    }
  };

  const savings = calculateSavings();
  const whatsappNumber = "5591000000000";
  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz a simulação no site e quero saber mais sobre energia solar.\n\nMeu gasto mensal: R$ ${monthlyBill}\nTipo: ${
      propertyType === "pf" ? "Residencial" : "Comercial"
    }\n\nQuero essa economia!`
  );

  return (
    <section className="py-20 bg-muted" id="simulador">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Descubra Sua <span className="text-solar-orange">Economia Solar</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Em menos de 1 minuto, veja quanto você pode economizar!
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-solar-orange/20">
            <CardHeader>
              <CardTitle className="text-2xl">
                <Zap className="inline-block mr-2 text-solar-orange" />
                Simulador de Economia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Monthly Bill Input */}
              <div className="space-y-2">
                <Label htmlFor="monthly-bill" className="text-lg">
                  Quanto você paga de energia por mês?
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-lg text-muted-foreground">
                    R$
                  </span>
                  <Input
                    id="monthly-bill"
                    type="number"
                    placeholder="500"
                    value={monthlyBill}
                    onChange={(e) => {
                      setMonthlyBill(e.target.value);
                      setShowResult(false);
                    }}
                    className="pl-12 text-lg h-14"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <Label className="text-lg">Tipo de Imóvel</Label>
                <RadioGroup
                  value={propertyType}
                  onValueChange={setPropertyType}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2 flex-1">
                    <RadioGroupItem value="pf" id="pf" />
                    <Label
                      htmlFor="pf"
                      className="cursor-pointer flex-1 p-4 border rounded-lg hover:border-solar-orange transition-colors"
                    >
                      Residencial (PF)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1">
                    <RadioGroupItem value="pj" id="pj" />
                    <Label
                      htmlFor="pj"
                      className="cursor-pointer flex-1 p-4 border rounded-lg hover:border-solar-orange transition-colors"
                    >
                      Comercial (PJ)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Calculate Button */}
              {!showResult && (
                <Button
                  onClick={handleCalculate}
                  size="lg"
                  className="w-full bg-solar-orange hover:bg-solar-orange-light text-white text-lg h-14"
                  disabled={!monthlyBill || parseFloat(monthlyBill) <= 0}
                >
                  Calcular Minha Economia
                </Button>
              )}

              {/* Results */}
              {showResult && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-solar-orange/10 border-2 border-solar-orange rounded-xl p-6 text-center">
                    <p className="text-lg mb-2">Égua! Sua economia pode chegar a:</p>
                    <p className="text-5xl font-bold text-solar-orange mb-2">
                      R$ {savings.annual}
                    </p>
                    <p className="text-lg text-muted-foreground">por ano!</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <TrendingUp className="mx-auto mb-2 text-solar-orange" size={32} />
                      <p className="text-sm text-muted-foreground">Economia Mensal</p>
                      <p className="text-2xl font-bold">R$ {savings.monthly}</p>
                    </div>
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <TrendingUp className="mx-auto mb-2 text-solar-orange" size={32} />
                      <p className="text-sm text-muted-foreground">Em 25 anos</p>
                      <p className="text-2xl font-bold">R$ {savings.years25}</p>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-14"
                    >
                      <MessageCircle className="mr-2" size={24} />
                      Quero essa Economia! Falar com Especialista
                    </Button>
                  </a>

                  <p className="text-center text-sm text-muted-foreground">
                    Resposta rápida • Orçamento sem compromisso
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
