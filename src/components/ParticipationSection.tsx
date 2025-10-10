import { ShoppingCart, Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import numeroSorteEpa from "@/assets/numerosorte-epa.png";
const ParticipationSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-12">
          Para participar é fácil!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-xl">
              Antes de passar suas compras, digite seu CPF no caixa.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-xl">
              A cada <span className="font-bold text-primary">R$ 100,00</span> em compras, você ganha 1 número da sorte.
            </p>
            <img 
              src={numeroSorteEpa} 
              alt="R$ 100 = 1 número da sorte" 
              className="w-48 h-auto mx-auto mt-6"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Gift className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-xl">
              Cadastre-se no site da promoção e pronto! Já está concorrendo a vale-compras de <span className="font-bold text-primary">R$ 1.000,00</span>!
            </p>
          </div>
        </div>

        {/* Botão centralizado */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="text-xl px-8 py-6 font-bold" asChild>
            <a href="https://supermercadoepa.crescevendas.com/registro" target="_blank" rel="noopener noreferrer">
              Cadastre-se agora e concorra!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ParticipationSection;