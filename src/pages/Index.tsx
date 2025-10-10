import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSection from "@/components/HeroSection";
import ParticipationSection from "@/components/ParticipationSection";
import Footer from "@/components/Footer";

// Lazy load dos componentes que não aparecem no primeiro viewport
const ChancesSection = lazy(() => import("@/components/ChancesSection"));
const OffersSection = lazy(() => import("@/components/OffersSection"));
const VideoSection = lazy(() => import("@/components/VideoSection"));
const StoreLocator = lazy(() => import("@/components/StoreLocator"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CountdownBanner />
      <HeroSection />
      <div id="como-participar">
        <ParticipationSection />
      </div>
      <Suspense fallback={<div className="h-96" />}>
        <div id="chances">
          <ChancesSection />
        </div>
        <div id="ofertas">
          <OffersSection />
        </div>
        <div id="aniversario">
          <VideoSection />
        </div>
        <div id="lojas">
          <StoreLocator />
        </div>
        <div id="regulamento">
          <FAQSection />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
