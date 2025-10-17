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
        contentToUse = JSON.parse(stored);
        console.log("✅ Site: Conteúdo do ADMIN carregado");
        console.log("🎥 Vídeo:", contentToUse.videoUrl);
        console.log("❓ FAQs:", contentToUse.faqs?.length || 0, "itens");
        
        // Mostra a primeira FAQ como exemplo para debug
        if (contentToUse.faqs && contentToUse.faqs[0]) {
          console.log("📝 Primeira FAQ:", contentToUse.faqs[0].question.substring(0, 50) + "...");
        }
      } catch (e) {
        console.error("❌ Erro ao carregar do localStorage:", e);
        // Se houver erro, usa vazio ao invés do padrão
        contentToUse = { videoUrl: "", faqs: [] };
        console.log("⚠️ Usando conteúdo vazio por erro");
      }
    } else {
      // Sem localStorage = conteúdo vazio
      contentToUse = { videoUrl: "", faqs: [] };
      console.log("🆕 Site: Nenhum conteúdo cadastrado ainda");
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
