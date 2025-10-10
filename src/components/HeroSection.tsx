import { Button } from "@/components/ui/button";
import personEpa from "@/assets/person-epa.png";
import logoCampanha from "@/assets/logo-epa-campanha.png";
import FloatingBalloons from "@/components/FloatingBalloons";
const HeroSection = () => {
  return <section className="relative min-h-[600px] overflow-hidden" style={{
    backgroundColor: '#f9e103'
  }}>
      <FloatingBalloons />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground space-y-6">
            <img src={logoCampanha} alt="EPA 66 Anos - Meio Milhão em vales-compra de R$ 1.000" className="w-full max-w-4xl" />
            
            <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-base md:text-lg">13 de Outubro à 15 de Novembro de 2025</div>
          </div>
          
          <div className="flex flex-col items-center space-y-0">
            <img src={personEpa} alt="Atendente EPA apontando para cima" className="w-full max-w-md" />
            <Button variant="hero" size="lg" className="text-xl px-12 py-8">
              CADASTRE-SE AGORA E CONCORRA
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;