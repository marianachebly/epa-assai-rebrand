import logoRodape from "@/assets/rodape-logo.png";
import logoBy from "@/assets/logo-by.png";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=553199926521&text=Ol%C3%A1%2C+gostaria+de+receber+informa%C3%A7%C3%B5es+da+campanha+de+66+anos+do+anivers%C3%A1rio+do+Epa%21&utm_source=LP+campanha&utm_medium=WhatsApp&utm_campaign=Anivers%C3%A1rio+EPA+66+anos&utm_id=66+anos&utm_term=Anivers%C3%A1rio+EPA";

  return (
    <>
      {/* Tarja de Contato */}
      <section className="bg-[#e30613] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Precisa de algum suporte?
            </h2>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-white text-[#e30613] hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Manda um WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Original */}
      <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <img src={logoRodape} alt="EPA 66 Anos" className="h-20 w-auto mx-auto" width={74} height={80} />
            <p className="text-sm max-w-4xl mx-auto leading-relaxed">
              Esta é uma promoção do EPA Supermercados válida para todas as lojas participantes no período de 13 de Outubro à 15 de Novembro de 2025. Consulte o regulamento completo para mais informações sobre a promoção.
            </p>
            <div className="text-xs text-primary-foreground/80">
              <p>01.928.075/0001-08 | Razão Social: DMA DISTRIBUIDORA S/A</p>
              <p className="mt-2">© 2025 DMA Distribuidora - Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
        
        {/* Badge By - Canto inferior esquerdo */}
        <a 
          href="https://www.listradigital.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <span className="text-primary-foreground/70 text-xs font-light">by</span>
          <img src={logoBy} alt="Listra Digital" className="h-4 w-auto" width={60} height={16} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
