import { ShoppingCart, Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
const ParticipationSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-12">
          Para participar é fácil!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-lg">
              Faça suas compras nas lojas <span className="font-bold">EPA de Minas Gerais</span>.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-lg">
              A cada <span className="font-bold">R$ 100,00</span> em compras, você ganha 1 número da sorte.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Gift className="w-12 h-12 text-secondary" />
            </div>
            <p className="text-secondary-foreground font-semibold text-lg">
              Cadastre-se no site da promoção e pronto! Já está concorrendo a <span className="font-bold">vale-compras de MIL REAIS!</span>
            </p>
          </div>
        </div>

        {/* Botão centralizado */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="text-xl px-8 py-6 font-bold">
            Cadastre-se agora e concorra!
          </Button>
        </div>
      </div>
    </section>;
};
export default ParticipationSection;