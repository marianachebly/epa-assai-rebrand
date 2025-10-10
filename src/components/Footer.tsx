import logoRodape from "@/assets/logo-rodape.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <img src={logoRodape} alt="EPA 66 Anos" className="h-20 w-auto mx-auto" />
          <p className="text-sm max-w-4xl mx-auto leading-relaxed">
            Esta é uma promoção do EPA Supermercados válida para todas as lojas participantes no período de 13 de Outubro à 15 de Novembro de 2025. Consulte o regulamento completo para mais informações sobre a promoção.
          </p>
          <div className="text-xs text-primary-foreground/80">
            <p>01.928.075/0001-08 | Razão Social: DMA DISTRIBUIDORA S/A</p>
            <p className="mt-2">© 2025 DMA Distribuidora - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
