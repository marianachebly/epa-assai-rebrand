import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
          
          <div className="bg-secondary rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-black text-secondary-foreground mb-6 text-center">
              Cadastre-se na promoção!
            </h2>
            
            <form className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome completo*</Label>
                <Input id="nome" placeholder="Digite seu nome" className="bg-background" />
              </div>
              
              <div>
                <Label htmlFor="cpf">CPF*</Label>
                <Input id="cpf" placeholder="000.000.000-00" className="bg-background" />
              </div>
              
              <div>
                <Label htmlFor="email">E-mail*</Label>
                <Input id="email" type="email" placeholder="seuemail@email.com" className="bg-background" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ddd">DDD*</Label>
                  <Input id="ddd" placeholder="00" className="bg-background" />
                </div>
                <div>
                  <Label htmlFor="telefone">Nº Celular*</Label>
                  <Input id="telefone" placeholder="00000-0000" className="bg-background" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email-confirm">Confirmar e-mail*</Label>
                <Input id="email-confirm" type="email" placeholder="seuemail@email.com" className="bg-background" />
              </div>
              
              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-xs text-secondary-foreground leading-tight">
                  Li e aceito os termos e condições do regulamento da promoção conforme descrito no site.
                </label>
              </div>
              
              <Button type="submit" variant="default" className="w-full" size="lg">
                QUERO PARTICIPAR!
              </Button>
              
              <p className="text-center text-xs text-secondary-foreground">
                Já cadastrado? <a href="#" className="underline font-bold">CLIQUE E CADASTRE SEU CUPOM</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
