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
  // Mantém EPA sempre em maiúscula
  return formatted.replace(/\bepa\b/gi, 'EPA');
}

export const useAdminContent = () => {
  const [content, setContent] = useState<Content>(defaultContent as Content);

  const loadContent = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let contentToUse: Content;
    
    if (stored) {
      try {
        const data = JSON.parse(stored);
        // Se o JSON padrão tiver mais FAQs que o localStorage, usa o JSON (conteúdo atualizado)
        if ((defaultContent as Content).faqs.length > data.faqs.length) {
          console.log("Detectado conteúdo atualizado no JSON, usando nova versão");
          contentToUse = defaultContent as Content;
        } else {
          contentToUse = data;
        }
      } catch (e) {
        console.error("Erro ao carregar conteúdo:", e);
        contentToUse = defaultContent as Content;
      }
    } else {
      contentToUse = defaultContent as Content;
    }
    
    // Formata as perguntas
    const formattedContent = {
      ...contentToUse,
      faqs: contentToUse.faqs.map(faq => ({
        ...faq,
        question: formatQuestion(faq.question)
      }))
    };
    
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
