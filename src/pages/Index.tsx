import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ParticipationSection from "@/components/ParticipationSection";
import ChancesSection from "@/components/ChancesSection";
import BrandsSection from "@/components/BrandsSection";
import VideoSection from "@/components/VideoSection";
import StoreLocator from "@/components/StoreLocator";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="como-participar">
        <ParticipationSection />
      </div>
      <div id="chances">
        <ChancesSection />
      </div>
      <BrandsSection />
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
