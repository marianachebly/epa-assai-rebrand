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

export const useAdminContent = () => {
  const [content, setContent] = useState<Content>(defaultContent as Content);

  const loadContent = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let contentToUse: Content;
    
    if (stored) {
      try {
        // Sempre usa o conteúdo do localStorage quando existir (prioridade para edições do ADMIN)
        contentToUse = JSON.parse(stored);
      } catch (e) {
        console.error("Erro ao carregar conteúdo:", e);
        contentToUse = defaultContent as Content;
      }
    } else {
      contentToUse = defaultContent as Content;
    }
    
    setContent(contentToUse);
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
