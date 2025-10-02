import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ganhadores = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="bg-primary">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-secondary">
              Ganhadores
            </h1>
            <p className="text-xl text-primary-foreground font-semibold">
              Confira quem são os ganhadores da promoção.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-background rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-3xl font-black text-foreground mb-6">
              Aguarde!
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              O sorteio será realizado em <strong>08/11/2025</strong> e o ganhador será divulgado após auditoria.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ganhadores;
