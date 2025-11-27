import { useState, useEffect, memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import bannerDesktop from "@/assets/aniversarioepa66anos.png";
import bannerMobile from "@/assets/banner-mobile.png";
import { Button } from "@/components/ui/button";

const FloatingBalloons = lazy(() => import("@/components/FloatingBalloons"));
const Confetti = lazy(() => import("@/components/Confetti"));

const HeroSection = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-[480px] overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ffd700 0%, #f9e103 50%, #ffed4e 100%)'
    }}>
      {/* Animações apenas no desktop para melhor performance mobile */}
      {!isMobile && (
        <Suspense fallback={null}>
          <Confetti />
          <FloatingBalloons />
        </Suspense>
      )}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Botão "Confira a lista dos ganhadores" */}
      <div className="absolute inset-0 z-20 flex items-center justify-center" style={{ paddingTop: isMobile ? '120px' : '180px' }}>
        <Link to="/ganhadores">
          <Button 
            size="lg"
            className="font-bold py-4 px-8 shadow-2xl hover:scale-105 transition-transform bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black"
            style={{
              fontSize: isMobile ? '1rem' : '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Confira os ganhadores
          </Button>
        </Link>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-end justify-center min-h-[480px] pt-6 pb-0">
        <img 
          src={isMobile ? bannerMobile : bannerDesktop} 
          alt="EPA 66 Anos - Meio Milhão em vales-compra de R$ 1.000" 
          className={isMobile ? "w-full max-w-md h-auto" : "w-full max-w-5xl max-h-[480px] object-contain"}
          width={isMobile ? 400 : 1024}
          height={isMobile ? 600 : 454}
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
});

export default HeroSection;