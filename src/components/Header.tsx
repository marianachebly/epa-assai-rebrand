import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold">EPA</div>
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">COMO PARTICIPAR</a>
              <a href="#" className="hover:text-secondary transition-colors">ANIVERSÁRIO EPA</a>
              <a href="#" className="hover:text-secondary transition-colors">LOJAS PARTICIPANTES</a>
              <a href="#" className="hover:text-secondary transition-colors">REGULAMENTO</a>
              <a href="#" className="hover:text-secondary transition-colors">CALENDÁRIO</a>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="hidden md:inline-flex">
            Meus números da sorte
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
