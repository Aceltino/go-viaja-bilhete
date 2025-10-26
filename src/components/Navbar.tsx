import { Button } from "@/components/ui/button";
import { Menu, X, Bus, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
              <Bus className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Viaja Fácil</span>
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <User className="h-4 w-4" />
                    {userProfile?.full_name || "Minha Conta"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Entrar
                </Button>
                <Button variant="default" onClick={() => navigate("/auth")}>
                  Cadastrar
                </Button>
              </>
            )}
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
                {user ? (
                  <>
                    <Button variant="ghost" className="w-full" onClick={() => navigate("/dashboard")}>
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button variant="outline" className="w-full" onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="w-full" onClick={() => navigate("/auth")}>
                      Entrar
                    </Button>
                    <Button variant="default" className="w-full" onClick={() => navigate("/auth")}>
                      Cadastrar
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
