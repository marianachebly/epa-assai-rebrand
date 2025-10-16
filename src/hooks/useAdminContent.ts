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
        // PRIORIDADE ABSOLUTA: Se existe no localStorage, SEMPRE usa ele
        contentToUse = JSON.parse(stored);
        console.log("✅ Conteúdo carregado do ADMIN (localStorage)");
      } catch (e) {
        console.error("❌ Erro ao carregar conteúdo do localStorage:", e);
        contentToUse = defaultContent as Content;
      }
    } else {
      // Só usa o content.json se NÃO houver nada no localStorage (primeira vez)
      contentToUse = defaultContent as Content;
      console.log("ℹ️ Usando conteúdo padrão (content.json) - primeira vez");
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
