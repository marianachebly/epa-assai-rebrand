import logoEpa from "@/assets/logo-epa.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <img src={logoEpa} alt="EPA" className="h-16 w-auto mx-auto" />
          <p className="text-sm max-w-4xl mx-auto leading-relaxed">
            Esta é uma promoção EPA válida para todas as lojas participantes. Consulte o regulamento completo 
            para mais informações sobre a promoção, marcas participantes e condições de participação.
          </p>
          <div className="text-xs text-primary-foreground/80">
            <p>CNPJ: 00.000.000/0001-00 | Razão Social: EPA Distribuidora S/A</p>
            <p className="mt-2">© 2025 EPA - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
