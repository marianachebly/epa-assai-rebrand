import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSectionSimple from "@/components/HeroSectionSimple";
import WinnersBanner from "@/components/WinnersBanner";
import Footer from "@/components/Footer";

const OffersSection = lazy(() => import("@/components/OffersSection"));
const StoreLocator = lazy(() => import("@/components/StoreLocator"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const HomeAlternativa = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CountdownBanner />
      <HeroSectionSimple />
      
      {/* Banner Animado de Ganhadores */}
      <WinnersBanner />

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
