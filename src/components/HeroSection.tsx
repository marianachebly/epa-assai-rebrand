import { Button } from "@/components/ui/button";
import personEpa from "@/assets/person-epa.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground space-y-6">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm">
              VÁLIDO ATÉ 31 DE DEZEMBRO
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              UM CERTIFICADO DE PRÊMIO DE
              <span className="block text-secondary text-7xl md:text-8xl mt-2">R$ 1 MILHÃO</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold">
              + MILHARES DE CUPONS!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg">
                COMO PARTICIPAR
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-0">
            <img 
              src={personEpa} 
              alt="Atendente EPA apontando para cima" 
              className="w-full max-w-md"
            />
            <Button variant="hero" size="lg" className="text-xl px-12 py-8">
              CADASTRE-SE AGORA E CONCORRA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
