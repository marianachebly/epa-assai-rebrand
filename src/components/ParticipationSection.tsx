import { ShoppingCart, UserPlus } from "lucide-react";
const ParticipationSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-12">
          Veja como participar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-black text-secondary-foreground mb-4">
              Compre R$20 ou mais
            </h3>
            <p className="text-secondary-foreground font-semibold">
              e informe seu CPF ou CNPJ no caixa.
            </p>
            <div className="mt-6 bg-primary text-primary-foreground rounded-full px-6 py-3 inline-block font-bold">
              COMPRAS GRÁTIS<br />ATÉ R$20,00
            </div>
          </div>
          
          <div className="bg-secondary rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-black text-secondary-foreground mb-4">
              Cadastre-se aqui
            </h3>
            <p className="text-secondary-foreground font-semibold">
              Informe seus dados e receba seu cupom
            </p>
            <div className="mt-6 bg-primary text-primary-foreground rounded-full px-6 py-3 inline-block font-bold text-3xl">
              R$ 1 MILHÃO
            </div>
            <p className="mt-2 text-secondary-foreground font-bold text-sm">
              em certificado + cupons diários
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ParticipationSection;