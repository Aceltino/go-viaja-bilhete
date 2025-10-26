import { Shield, Clock, Smartphone, HeadphonesIcon, Percent, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Transações protegidas e criptografadas para sua segurança",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Compre bilhetes a qualquer hora, de qualquer lugar",
  },
  {
    icon: Smartphone,
    title: "Bilhete Digital",
    description: "Sem necessidade de impressão, tudo no seu smartphone",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Equipe pronta para ajudar via WhatsApp, email ou telefone",
  },
  {
    icon: Percent,
    title: "Promoções Exclusivas",
    description: "Descontos e ofertas especiais para clientes frequentes",
  },
  {
    icon: Users,
    title: "Múltiplas Empresas",
    description: "Compare e escolha entre diversas operadoras confiáveis",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Por Que Escolher-nos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A forma mais moderna, segura e conveniente de viajar por Angola
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary hover:shadow-[var(--shadow-medium)] transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
