import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSectionSimple from "@/components/HeroSectionSimple";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OffersSection = lazy(() => import("@/components/OffersSection"));
const StoreLocator = lazy(() => import("@/components/StoreLocator"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const HomeAlternativa = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CountdownBanner />
      <HeroSectionSimple />
      
      {/* Botão Confira os Ganhadores */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Link to="/ganhadores">
            <Button 
              size="lg"
              className="font-bold py-6 px-12 text-xl shadow-2xl hover:scale-105 transition-transform bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              Confira os ganhadores
            </Button>
          </Link>
        </div>
      </section>

      <Suspense fallback={<div className="h-96" />}>
        <div id="ofertas">
          <OffersSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <div id="lojas">
          <StoreLocator />
        </div>
        <div id="perguntas">
          <FAQSection />
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default HomeAlternativa;
