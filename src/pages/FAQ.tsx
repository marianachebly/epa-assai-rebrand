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
import { useAdminContent } from "@/hooks/useAdminContent";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { faqs } = useAdminContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = faqs.filter(
    (faq) => {
      const answerText = typeof faq.answer === 'string' ? faq.answer : '';
      return (
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        answerText.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
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
