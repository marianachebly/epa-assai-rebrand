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
      <div className="absolute inset-0 z-20 flex items-center justify-center" style={{ paddingTop: isMobile ? '80px' : '100px' }}>
        <Link to="/ganhadores" style={{ transform: 'rotate(-12deg)' }}>
          <Button 
            size="lg"
            className="font-bold py-6 px-8 shadow-2xl hover:scale-105 transition-transform"
            style={{
              fontSize: isMobile ? '1.2rem' : '2rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.8)',
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              color: 'white'
            }}
          >
            Confira a lista dos ganhadores
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