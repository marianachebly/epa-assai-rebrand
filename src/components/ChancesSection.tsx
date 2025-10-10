import { Gift } from "lucide-react";
import numeroSorte from "@/assets/numerosorte.png";

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
          <div className="bg-background rounded-3xl p-8 md:p-8 shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 max-h-none md:max-h-[180px]">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  Comprou com o Cartão Fácil EPA?
                </h3>
                <p className="text-primary font-bold text-xl md:text-2xl">
                  Ganhe números da sorte em dobro.
                </p>
              </div>
              <div className="flex-shrink-0 mt-0 md:mt-0 h-[180px] md:h-[180px] overflow-visible md:overflow-hidden flex items-start md:items-center">
                <img 
                  src={numeroSorte} 
                  alt="Números da sorte em dobro" 
                  className="w-64 md:w-80 h-auto object-contain"
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
