import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como faço para participar da Promoção?",
      answer: (
        <div className="space-y-2">
          <p>• Faça suas compras nas lojas EPA de Minas Gerais.</p>
          <p>• Digite seu CPF antes de passar suas compras!</p>
          <p>• A cada R$ 100 em compras, você ganha 1 número da sorte.</p>
          <p>• Cadastre-se aqui no site da promoção e pronto!</p>
          <p>• Já está concorrendo a vale-compras de R$ 1.000.</p>
          <p className="font-bold text-primary mt-4">Se você comprar com o cartão Fácil, você tem número da sorte em dobro!</p>
        </div>
      )
    },
    {
      question: "Como me cadastrar para a sorteio?",
      answer: "Após realizar suas compras, guarde seus cupons fiscais. Acesse nosso site ou aplicativo, faça seu cadastro informando seus dados pessoais e registre os números dos cupons fiscais das compras participantes. Você receberá automaticamente seus números da sorte."
    },
    {
      question: "Qual período para participação para realizar compras válidas?",
      answer: "O período de participação é de 13 de Outubro de 2025 até 15 de Novembro de 2025. Somente compras realizadas neste período serão válidas para a promoção."
    }
  ];
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary-foreground mb-12">
          Perguntas frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl shadow-lg overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/5 text-left font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/perguntas-frequentes">
            <Button variant="default" size="lg">
              VER MAIS PERGUNTAS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
