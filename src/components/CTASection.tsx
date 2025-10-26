import { Button } from "@/components/ui/button";
import { Building2, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Passengers */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 lg:p-12 text-primary-foreground shadow-[var(--shadow-strong)]">
            <div className="relative z-10">
              <User className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Para Passageiros</h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Comece a viajar com mais conforto e praticidade. 
                Crie sua conta e ganhe desconto na primeira viagem!
              </p>
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 shadow-lg"
                onClick={() => navigate("/auth")}
              >
                Criar Conta Grátis
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          </div>

          {/* For Companies */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary-glow p-8 lg:p-12 text-secondary-foreground shadow-[var(--shadow-strong)]">
            <div className="relative z-10">
              <Building2 className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Para Empresas</h3>
              <p className="text-lg mb-6 text-secondary-foreground/90">
                Expanda seu negócio e alcance mais clientes. 
                Cadastre sua empresa e comece a vender online hoje!
              </p>
              <Button 
                size="lg" 
                className="bg-background text-secondary hover:bg-background/90 shadow-lg"
                onClick={() => navigate("/auth")}
              >
                Cadastrar Empresa
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-foreground/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
