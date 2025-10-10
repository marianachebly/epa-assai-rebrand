import { Gift } from "lucide-react";
import izaCartaoFacil from "@/assets/iza_cartao_facil.png";

const ChancesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/90 to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary mb-12 flex items-center justify-center gap-4">
          <Gift className="w-12 h-12" />
          Aumente suas chances
          <Gift className="w-12 h-12" />
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  Comprou com o Cartão Fácil EPA?
                </h3>
                <p className="text-primary font-bold text-2xl md:text-3xl">
                  Ganhe números da sorte em dobro!
                </p>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src={izaCartaoFacil} 
                  alt="Cartão Fácil EPA" 
                  className="w-64 md:w-80 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancesSection;
