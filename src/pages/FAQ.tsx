import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Como faço para participar da Promoção?",
      answer: "Para participar, você deve realizar compras nos supermercados EPA participantes durante o período da promoção (13 de Outubro a 15 de Novembro de 2025). A cada R$ 1.000,00 em compras de produtos participantes, você ganha um número da sorte para concorrer ao prêmio de meio milhão de reais."
    },
    {
      question: "Como me cadastrar para o sorteio?",
      answer: "Após realizar suas compras, guarde seus cupons fiscais. Acesse nosso site ou aplicativo, faça seu cadastro informando seus dados pessoais e registre os números dos cupons fiscais das compras participantes. Você receberá automaticamente seus números da sorte."
    },
    {
      question: "Qual período para participação para realizar compras válidas?",
      answer: "O período de participação é de 13 de Outubro de 2025 até 15 de Novembro de 2025. Somente compras realizadas neste período serão válidas para a promoção."
    },
    {
      question: "Quais produtos participam da promoção?",
      answer: "Todos os produtos vendidos nas lojas EPA participantes estão incluídos na promoção, exceto medicamentos, bebidas alcoólicas e produtos com restrições legais. Consulte o regulamento completo para mais detalhes."
    },
    {
      question: "Como funciona o sorteio?",
      answer: "O sorteio será realizado através da Loteria Federal no dia 22/11/2025. A apuração ocorrerá em 27/11/2025. O ganhador será aquele cujo número da sorte corresponder aos critérios estabelecidos no regulamento."
    },
    {
      question: "Quando e como saberei se fui contemplado?",
      answer: "Os nomes dos ganhadores serão publicados no site e divulgados nas redes sociais. Você também será comunicado individualmente pela promotora através do telefone e/ou e-mail cadastrado, no prazo máximo de 10 dias após a apuração."
    },
    {
      question: "Posso acumular números da sorte?",
      answer: "Sim! Quanto mais você comprar, mais números da sorte você acumula. Cada R$ 1.000,00 em compras gera um novo número da sorte, aumentando suas chances de ganhar."
    },
    {
      question: "Preciso guardar os cupons fiscais?",
      answer: "Sim, é obrigatório guardar todos os cupons fiscais das compras participantes. Eles poderão ser solicitados para comprovação em caso de contemplação."
    },
    {
      question: "Quantas lojas EPA participam da promoção?",
      answer: "Todas as lojas EPA estão participando desta promoção especial de aniversário de 66 anos. Consulte nosso localizador de lojas no site para encontrar a unidade mais próxima de você."
    },
    {
      question: "O prêmio é pago de uma vez?",
      answer: "Sim, o prêmio de meio milhão de reais será pago em uma única parcela ao ganhador, conforme estabelecido no regulamento da promoção."
    },
    {
      question: "Posso transferir meu número da sorte para outra pessoa?",
      answer: "Não, os números da sorte são pessoais e intransferíveis. Eles estão vinculados ao CPF cadastrado no momento da participação."
    },
    {
      question: "Existe limite de números da sorte por pessoa?",
      answer: "Não há limite! Você pode acumular quantos números da sorte quiser durante o período da promoção, desde que cumpra os requisitos de compra."
    }
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="bg-gradient-to-b from-primary via-primary to-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-primary-foreground">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-primary-foreground/90 font-semibold max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre a promoção de aniversário EPA.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-2xl shadow-lg overflow-hidden border-none"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5 text-left font-bold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="bg-background rounded-2xl shadow-lg p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Nenhuma pergunta encontrada com "{searchTerm}".
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
