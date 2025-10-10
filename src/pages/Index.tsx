import Header from "@/components/Header";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSection from "@/components/HeroSection";
import ParticipationSection from "@/components/ParticipationSection";
import ChancesSection from "@/components/ChancesSection";
import OffersSection from "@/components/OffersSection";
import VideoSection from "@/components/VideoSection";
import StoreLocator from "@/components/StoreLocator";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import NearbyStores from "@/components/NearbyStores";
import NearestStoreCard from "@/components/NearestStoreCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CountdownBanner />
      <HeroSection />
      <div id="como-participar">
        <ParticipationSection />
      </div>
      <div id="chances">
        <ChancesSection />
      </div>
      <NearestStoreCard />
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
      <Footer />
    </div>
  );
};

export default Index;
