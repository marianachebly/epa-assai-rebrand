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
          </div>

          <div className="max-w-4xl mx-auto bg-background rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-black text-foreground mb-6 text-center">
              Aguarde!
            </h2>
            <div className="text-lg text-foreground leading-relaxed space-y-4">
              <p>
                A data do sorteio da Loteria Federal será em <strong>22/11/25</strong>.
              </p>
              <p>
                A data de apuração será em <strong>27/11/25</strong>.
              </p>
              <p>
                Os nomes dos ganhadores serão publicados aqui no site e divulgados também em redes sociais. Também serão comunicados individualmente pela promotora, por meio de telefone e/ou e-mail cadastrados no momento da inscrição, no prazo máximo de 10 (dez) dias contados da apuração.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ganhadores;
