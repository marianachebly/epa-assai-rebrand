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
import logoEpa from "@/assets/logo-aniversario.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Altura do header + margem extra
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img src={logoEpa} alt="EPA" className="h-12 w-auto" width={49} height={48} />
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
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <Button variant="secondary" size="sm" asChild>
              <a href="https://supermercadoepa.crescevendas.com/registro" target="_blank" rel="noopener noreferrer">
                Cadastre-se e concorra
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://supermercadoepa.crescevendas.com/login" target="_blank" rel="noopener noreferrer">
                Meus números da sorte
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <Link 
                  to="/" 
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block"
                >
                  <img src={logoEpa} alt="EPA" className="h-16 w-auto mx-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity" width={65} height={64} />
                </Link>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-8">
                <button 
                  onClick={() => handleMenuClick('como-participar')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-1"
                >
                  COMO PARTICIPAR
                </button>
                <button 
                  onClick={() => handleMenuClick('chances')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-1"
                >
                  AUMENTE SUAS CHANCES
                </button>
                <button 
                  onClick={() => handleMenuClick('lojas')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-1"
                >
                  LOJAS PARTICIPANTES
                </button>
                <button 
                  onClick={() => handleMenuClick('regulamento', '/regulamento')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-1"
                >
                  REGULAMENTO
                </button>
                <button 
                  onClick={() => handleMenuClick('ganhadores', '/ganhadores')} 
                  className="text-left text-primary hover:text-secondary transition-colors font-semibold py-1"
                >
                  GANHADORES
                </button>
                <Button variant="secondary" size="sm" className="mt-4" onClick={() => setOpen(false)} asChild>
                  <a href="https://supermercadoepa.crescevendas.com/registro" target="_blank" rel="noopener noreferrer">
                    Cadastre-se e concorra
                  </a>
                </Button>
                <Button variant="default" size="sm" onClick={() => setOpen(false)} asChild>
                  <a href="https://supermercadoepa.crescevendas.com/login" target="_blank" rel="noopener noreferrer">
                    Meus números da sorte
                  </a>
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
