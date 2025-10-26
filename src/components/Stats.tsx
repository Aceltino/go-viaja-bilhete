import { Users, Bus, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50.000+",
    label: "Passageiros Satisfeitos",
  },
  {
    icon: Bus,
    value: "150+",
    label: "Empresas Parceiras",
  },
  {
    icon: MapPin,
    value: "200+",
    label: "Rotas Disponíveis",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Avaliação Média",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-primary-foreground">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-foreground/20 p-4 rounded-2xl backdrop-blur-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm lg:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
