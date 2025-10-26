import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search } from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Autocarro moderno em viagem" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
            Viaje por Angola com Conforto e Segurança
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/95">
            Compare horários, reserve bilhetes online e viaje sem complicações. 
            Conectamos você às melhores empresas de transporte do país.
          </p>

          {/* Search Form */}
          <div className="bg-background/95 backdrop-blur-sm p-6 rounded-2xl shadow-[var(--shadow-strong)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Origem" 
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Destino" 
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="date" 
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
            </div>
            <Button size="lg" variant="hero" className="w-full">
              <Search className="mr-2 h-5 w-5" />
              Buscar Bilhetes
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
