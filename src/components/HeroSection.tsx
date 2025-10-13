import bannerAniversario from "@/assets/banner-aniversario66.png";
import bannerMobile from "@/assets/banner-mobile.png";
import FloatingBalloons from "@/components/FloatingBalloons";
import Confetti from "@/components/Confetti";
import { useState, useEffect, memo } from "react";

const HeroSection = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-[480px] overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ffd700 0%, #f9e103 50%, #ffed4e 100%)'
    }}>
      <Confetti />
      <FloatingBalloons />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-end justify-center min-h-[480px] pt-6 pb-[30px]">
        <img 
          src={isMobile ? bannerMobile : bannerAniversario} 
          alt="EPA 66 Anos - Meio Milhão em vales-compra de R$ 1.000" 
          className={isMobile ? "w-full max-w-md h-auto" : "w-full max-w-5xl max-h-[480px] object-cover object-bottom"}
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
});

export default HeroSection;