import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoEpa from "@/assets/logo-epa.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMenuClick = (sectionId: string, path?: string) => {
    setOpen(false); // Fecha o menu mobile
    if (path) {
      // Navega para outra página usando React Router
      navigate(path);
    } else if (isHomePage) {
      // Scroll na mesma página
      scrollToSection(sectionId);
    } else {
      // Volta para home e depois faz scroll
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className="bg-background text-primary py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <img src={logoEpa} alt="EPA" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex gap-6 text-sm">
              <button onClick={() => handleMenuClick('como-participar')} className="hover:text-secondary transition-colors font-semibold">
                COMO PARTICIPAR
              </button>
              <button onClick={() => handleMenuClick('chances')} className="hover:text-secondary transition-colors font-semibold">
                AUMENTE SUAS CHANCES
              </button>
              <button onClick={() => handleMenuClick('lojas')} className="hover:text-secondary transition-colors font-semibold">
                LOJAS PARTICIPANTES
              </button>
              <button onClick={() => handleMenuClick('regulamento', '/regulamento')} className="hover:text-secondary transition-colors font-semibold">
                REGULAMENTO
              </button>
              <button onClick={() => handleMenuClick('ganhadores', '/ganhadores')} className="hover:text-secondary transition-colors font-semibold">
                GANHADORES
              </button>
            </div>
          </div>
          
          {/* Desktop Button */}
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            Meus números da sorte
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <img src={logoEpa} alt="EPA" className="h-16 w-auto mx-auto mb-4" />
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <button 
                  onClick={() => handleMenuClick('como-participar')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-2"
                >
                  COMO PARTICIPAR
                </button>
                <button 
                  onClick={() => handleMenuClick('chances')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-2"
                >
                  AUMENTE SUAS CHANCES
                </button>
                <button 
                  onClick={() => handleMenuClick('lojas')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-2"
                >
                  LOJAS PARTICIPANTES
                </button>
                <button 
                  onClick={() => handleMenuClick('regulamento', '/regulamento')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-2"
                >
                  REGULAMENTO
                </button>
                <button 
                  onClick={() => handleMenuClick('ganhadores', '/ganhadores')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-2"
                >
                  GANHADORES
                </button>
                <Button variant="default" size="sm" className="mt-4" onClick={() => setOpen(false)}>
                  Meus números da sorte
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
