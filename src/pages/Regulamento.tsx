import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Regulamento = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-black text-center text-primary mb-8">
          Regulamento da Promoção
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8 text-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. DA PROMOÇÃO</h2>
            <p className="leading-relaxed">
              A promoção "EPA Aniversário 2025" é realizada pela EPA Distribuidora S/A, 
              inscrita no CNPJ sob o nº 00.000.000/0001-00, com sede na [Endereço Completo].
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. PERÍODO DE VIGÊNCIA</h2>
            <p className="leading-relaxed">
              A promoção terá início no dia 01 de janeiro de 2025 e término no dia 31 de dezembro de 2025, 
              abrangendo todo o território nacional nas lojas EPA participantes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. PARTICIPAÇÃO</h2>
            <p className="leading-relaxed">
              Poderão participar desta promoção todas as pessoas físicas residentes e domiciliadas no Brasil, 
              maiores de 18 anos, que realizarem compras nas lojas EPA participantes durante o período de vigência 
              da promoção e efetuarem o cadastro do cupom fiscal no site oficial da promoção.
            </p>
            <div className="pl-6 space-y-2">
              <p className="leading-relaxed">
                <strong>3.1.</strong> Não poderão participar da promoção: funcionários da EPA, seus cônjuges, 
                ascendentes, descendentes e colaterais até o segundo grau.
              </p>
              <p className="leading-relaxed">
                <strong>3.2.</strong> Cada CPF poderá cadastrar até 5 cupons fiscais por dia.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. MECÂNICA DA PROMOÇÃO</h2>
            <p className="leading-relaxed">
              Para participar, o cliente deverá:
            </p>
            <ol className="list-decimal pl-8 space-y-2 leading-relaxed">
              <li>Realizar compras em qualquer loja EPA participante</li>
              <li>Acessar o site oficial da promoção [www.exemplo.com.br]</li>
              <li>Efetuar o cadastro com seus dados pessoais (nome completo, CPF, e-mail e telefone)</li>
              <li>Cadastrar o número do cupom fiscal e a data da compra</li>
              <li>Aguardar a validação do cupom pelo sistema</li>
            </ol>
            <p className="leading-relaxed mt-4">
              <strong>4.1.</strong> Cada R$ 50,00 em compras dará direito a 1 (um) número da sorte.
            </p>
            <p className="leading-relaxed">
              <strong>4.2.</strong> Os números da sorte serão gerados automaticamente pelo sistema após validação do cupom.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. DOS PRÊMIOS</h2>
            <p className="leading-relaxed">
              Serão sorteados os seguintes prêmios:
            </p>
            <ul className="list-disc pl-8 space-y-2 leading-relaxed">
              <li>1 (um) Certificado de Prêmio no valor de R$ 1.000.000,00 (um milhão de reais)</li>
              <li>Milhares de cupons de desconto para compras nas lojas EPA</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. DO SORTEIO</h2>
            <p className="leading-relaxed">
              O sorteio será realizado em conformidade com a Lei nº 5.768/71 e Decreto nº 70.951/72, 
              pela Loteria Federal, no dia 15 de janeiro de 2026, às 20h.
            </p>
            <p className="leading-relaxed">
              <strong>6.1.</strong> Será considerado contemplado o participante cujo número da sorte corresponder 
              aos 5 (cinco) últimos algarismos do primeiro prêmio da extração da Loteria Federal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. DA ENTREGA DOS PRÊMIOS</h2>
            <p className="leading-relaxed">
              O ganhador será contatado pelos canais de comunicação informados no cadastro (e-mail e telefone) 
              em até 5 (cinco) dias úteis após a data do sorteio.
            </p>
            <p className="leading-relaxed">
              <strong>7.1.</strong> O prêmio deverá ser retirado em até 180 (cento e oitenta) dias após a data do sorteio.
            </p>
            <p className="leading-relaxed">
              <strong>7.2.</strong> Para retirar o prêmio, o ganhador deverá apresentar documento de identificação 
              com foto e CPF original.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. DISPOSIÇÕES GERAIS</h2>
            <p className="leading-relaxed">
              A EPA se reserva o direito de desclassificar o participante que:
            </p>
            <ul className="list-disc pl-8 space-y-2 leading-relaxed">
              <li>Fornecer dados incorretos ou inverídicos</li>
              <li>Fraudar ou tentar fraudar o sistema de cadastro</li>
              <li>Utilizar meios ilícitos para participar da promoção</li>
              <li>Não cumprir as regras estabelecidas neste regulamento</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. ACEITE DO REGULAMENTO</h2>
            <p className="leading-relaxed">
              A participação nesta promoção implica na aceitação total e irrestrita de todos os termos 
              e condições estabelecidos neste regulamento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">10. INFORMAÇÕES</h2>
            <p className="leading-relaxed">
              Para maiores informações sobre a promoção, entre em contato através:
            </p>
            <ul className="list-disc pl-8 space-y-2 leading-relaxed">
              <li>E-mail: promocao@epa.com.br</li>
              <li>Telefone: 0800 000 0000</li>
              <li>Horário de atendimento: Segunda a sexta, das 9h às 18h</li>
            </ul>
          </section>

          <div className="bg-muted p-6 rounded-lg mt-12">
            <p className="text-sm text-center text-muted-foreground">
              Certificado de Autorização SECAP/ME nº 00.000000/2025<br />
              Promoção realizada nos termos da Lei nº 5.768/71 e Decreto nº 70.951/72
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regulamento;
