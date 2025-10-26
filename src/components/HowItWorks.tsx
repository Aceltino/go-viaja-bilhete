import { Search, CreditCard, Ticket, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Pesquise",
    description: "Busque sua rota, data e horário preferido entre centenas de opções disponíveis",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: CreditCard,
    title: "Pague",
    description: "Escolha seu meio de pagamento: Multicaixa, referência bancária ou cartão",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Ticket,
    title: "Receba",
    description: "Seu bilhete digital chega instantaneamente por email e SMS com QR Code",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: CheckCircle,
    title: "Viaje",
    description: "Apresente seu bilhete digital ao motorista e boa viagem!",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprar bilhetes nunca foi tão fácil. Siga estes 4 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`${step.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
