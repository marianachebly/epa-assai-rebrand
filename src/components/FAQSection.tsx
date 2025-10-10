import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAdminContent } from "@/hooks/useAdminContent";

const FAQSection = () => {
  const { faqs } = useAdminContent();
  
  // Pega apenas as 3 primeiras FAQs para a home
  const homeFaqs = faqs.slice(0, 3);
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary-foreground mb-12">
          Perguntas frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {homeFaqs.map((faq, index) => (
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
