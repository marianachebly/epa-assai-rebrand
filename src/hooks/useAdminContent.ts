import { useState, useEffect } from "react";
import defaultContent from "@/config/content.json";

const STORAGE_KEY = "listra_admin_content";

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface Content {
  videoUrl: string;
  faqs: FAQ[];
}

const formatQuestion = (question: string): string => {
  // Converte para minúscula e capitaliza primeira letra
  const formatted = question.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  // Mantém EPA e CPF sempre em maiúscula
  return formatted
    .replace(/\bepa\b/gi, 'EPA')
    .replace(/\bcpf\b/gi, 'CPF');
};

export const useAdminContent = () => {
  const [content, setContent] = useState<Content>(defaultContent as Content);

  const loadContent = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let contentToUse: Content;
    let shouldFormat = false;
    
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const defaultData = defaultContent as Content;
        
        // Verifica se precisa atualizar: mais FAQs no default OU primeira FAQ diferente
        const needsUpdate = 
          defaultData.faqs.length > data.faqs.length ||
          (defaultData.faqs[0]?.question !== data.faqs[0]?.question);
        
        if (needsUpdate) {
          console.log("🔄 Detectado conteúdo atualizado, aplicando formatação");
          contentToUse = defaultData;
          shouldFormat = true;
          // Limpa o localStorage para forçar reload
          localStorage.removeItem(STORAGE_KEY);
        } else {
          contentToUse = data;
          shouldFormat = false;
        }
      } catch (e) {
        console.error("Erro ao carregar conteúdo:", e);
        contentToUse = defaultContent as Content;
        shouldFormat = true;
      }
    } else {
      contentToUse = defaultContent as Content;
      shouldFormat = true;
    }
    
    // Formata as perguntas se necessário
    const formattedContent = shouldFormat ? {
      ...contentToUse,
      faqs: contentToUse.faqs.map(faq => ({
        ...faq,
        question: formatQuestion(faq.question)
      }))
    } : contentToUse;
    
    setContent(formattedContent);
  };

  useEffect(() => {
    loadContent();

    // Escuta mudanças no conteúdo
    const handleUpdate = () => {
      loadContent();
    };

    window.addEventListener("content-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("content-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return content;
};
