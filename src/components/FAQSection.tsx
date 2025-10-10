import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    "Como faço para participar da Promoção?",
    "Como me cadastrar para a sorteio?",
    "Qual período para participação para realizar compras válidas?"
  ];
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary-foreground mb-12">
          Perguntas frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {faq}
                </h3>
                <ChevronDown className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform" />
              </div>
            </div>
          ))}
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
