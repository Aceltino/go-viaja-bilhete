import { Button } from "@/components/ui/button";
import { Menu, X, Bus } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
              <Bus className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">GoBilhete</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Rotas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Empresas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Suporte
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Entrar</Button>
            <Button variant="default">Cadastrar</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Rotas
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Como Funciona
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Empresas
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Suporte
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="w-full">Entrar</Button>
                <Button variant="default" className="w-full">Cadastrar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
