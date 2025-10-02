import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoEpa from "@/assets/logo-epa.png";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMenuClick = (sectionId: string, path?: string) => {
    if (path) {
      // Navega para outra página
      window.location.href = path;
    } else if (isHomePage) {
      // Scroll na mesma página
      scrollToSection(sectionId);
    } else {
      // Volta para home e depois faz scroll
      window.location.href = `/#${sectionId}`;
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
              <button onClick={() => handleMenuClick('aniversario')} className="hover:text-secondary transition-colors font-semibold">
                ANIVERSÁRIO EPA
              </button>
              <button onClick={() => handleMenuClick('lojas')} className="hover:text-secondary transition-colors font-semibold">
                LOJAS PARTICIPANTES
              </button>
              <button onClick={() => handleMenuClick('regulamento', '/regulamento')} className="hover:text-secondary transition-colors font-semibold">
                REGULAMENTO
              </button>
              <button onClick={() => handleMenuClick('chances')} className="hover:text-secondary transition-colors font-semibold">
                CALENDÁRIO
              </button>
            </div>
          </div>
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            Meus números da sorte
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
