import bannerAniversario from "@/assets/aniversarioepa66anos.png";
import FloatingBalloons from "@/components/FloatingBalloons";

const HeroSection = () => {
  return <section className="relative min-h-[600px] overflow-hidden" style={{
    backgroundColor: '#f9e103'
  }}>
      <FloatingBalloons />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10 flex items-center justify-center min-h-[600px]">
        <img src={bannerAniversario} alt="EPA 66 Anos - Meio Milhão em vales-compra de R$ 1.000" className="w-full max-w-5xl" />
      </div>
    </section>;
};
export default HeroSection;