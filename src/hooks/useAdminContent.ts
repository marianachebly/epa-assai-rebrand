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
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setContent(data);
      } catch (e) {
        console.error("Erro ao carregar conteúdo:", e);
        setContent(defaultContent as Content);
      }
    } else {
      setContent(defaultContent as Content);
    }
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
