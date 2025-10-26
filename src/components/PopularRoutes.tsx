import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const routes = [
  {
    id: 1,
    from: "Luanda",
    to: "Benguela",
    duration: "8h",
    price: "12.000",
    frequency: "6x/dia",
  },
  {
    id: 2,
    from: "Luanda",
    to: "Huambo",
    duration: "6h 30min",
    price: "10.500",
    frequency: "8x/dia",
  },
  {
    id: 3,
    from: "Benguela",
    to: "Lubango",
    duration: "5h",
    price: "8.000",
    frequency: "4x/dia",
  },
  {
    id: 4,
    from: "Luanda",
    to: "Cabinda",
    duration: "12h",
    price: "15.000",
    frequency: "3x/dia",
  },
];

export const PopularRoutes = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Rotas Populares</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Viaje pelos principais destinos de Angola com conforto e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <Card 
              key={route.id} 
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">{route.from}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-lg">{route.to}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{route.duration}</span>
                    <span className="ml-auto text-xs bg-muted px-2 py-1 rounded-full">
                      {route.frequency}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">A partir de</p>
                    <p className="text-2xl font-bold text-primary">{route.price} Kz</p>
                  </div>
                  <Button variant="secondary" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Ver Horários
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Ver Todas as Rotas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
