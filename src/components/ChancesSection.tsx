import { Gift, Smartphone, ShoppingBag } from "lucide-react";

const ChancesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/90 to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary mb-12 flex items-center justify-center gap-4">
          <Gift className="w-12 h-12" />
          Aumente suas chances
          <Gift className="w-12 h-12" />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background rounded-2xl p-6 text-center shadow-xl">
            <div className="mb-4">
              <Gift className="w-16 h-16 text-primary mx-auto" />
            </div>
            <h3 className="text-lg font-black text-foreground mb-2">
              Compre produtos<br />das marcas participantes
            </h3>
            <p className="text-primary font-bold text-xl">+1 número da sorte</p>
          </div>
          
          <div className="bg-background rounded-2xl p-6 text-center shadow-xl">
            <div className="mb-4">
              <Smartphone className="w-16 h-16 text-primary mx-auto" />
            </div>
            <h3 className="text-lg font-black text-foreground mb-2">
              Compre R$ 100 ou mais<br />em uma única compra
            </h3>
            <p className="text-primary font-bold text-xl">+1 número da sorte</p>
          </div>
          
          <div className="bg-background rounded-2xl p-6 text-center shadow-xl">
            <div className="mb-4">
              <ShoppingBag className="w-16 h-16 text-primary mx-auto" />
            </div>
            <h3 className="text-lg font-black text-foreground mb-2">
              Pegue seu chip<br />do EPA no caixa
            </h3>
            <p className="text-primary font-bold text-xl">+1 número único</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancesSection;
