import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const StoreLocator = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button variant="secondary" size="lg" className="gap-2">
            CONFIRA AQUI OS REGULAMENTOS DA PROMOÇÃO
            <span className="text-2xl">→</span>
          </Button>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary mb-12">
          Confira a Loja EPA mais próxima de você!
        </h2>
        
        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="estado">Selecione seu estado</Label>
                <select
                  id="estado"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Selecione...</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="SP">São Paulo</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="cidade">Selecione sua cidade</Label>
                <select
                  id="cidade"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Selecione...</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="bairro">Selecione seu bairro</Label>
                <select
                  id="bairro"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Selecione...</option>
                </select>
              </div>
            </div>
            
            <div className="bg-muted rounded-2xl p-6 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-primary mx-auto" />
                <p className="text-muted-foreground font-semibold">
                  Loja mais próxima<br />será exibida aqui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
