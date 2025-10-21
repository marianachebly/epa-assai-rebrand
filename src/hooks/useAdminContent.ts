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
  // Sistema ADMIN desabilitado - usa apenas content.json
  console.log("📄 Usando conteúdo fixo do content.json");
  console.log("🎥 Vídeo:", defaultContent.videoUrl);
  console.log("❓ FAQs:", defaultContent.faqs?.length || 0, "itens");
  
  return defaultContent as Content;
};
