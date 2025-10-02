import { Button } from "@/components/ui/button";
import logoEpa from "@/assets/logo-epa.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-background text-primary py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={logoEpa} alt="EPA" className="h-12 w-auto" />
            <div className="hidden md:flex gap-6 text-sm">
              <button onClick={() => scrollToSection('como-participar')} className="hover:text-secondary transition-colors font-semibold">
                COMO PARTICIPAR
              </button>
              <button onClick={() => scrollToSection('aniversario')} className="hover:text-secondary transition-colors font-semibold">
                ANIVERSÁRIO EPA
              </button>
              <button onClick={() => scrollToSection('lojas')} className="hover:text-secondary transition-colors font-semibold">
                LOJAS PARTICIPANTES
              </button>
              <button onClick={() => scrollToSection('regulamento')} className="hover:text-secondary transition-colors font-semibold">
                REGULAMENTO
              </button>
              <button onClick={() => scrollToSection('chances')} className="hover:text-secondary transition-colors font-semibold">
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
