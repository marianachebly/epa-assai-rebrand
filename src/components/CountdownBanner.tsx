import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CountdownBanner = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    (days: number) => (
      <>
        Você ainda tem <span className="text-lg md:text-xl">{days} DIAS</span> para participar.
      </>
    ),
    () => (
      <>
        Não se esqueça de digitar seu CPF no caixa ANTES de passar suas compras! Depois cadastre-se aqui para concorrer.
      </>
    ),
    () => (
      <>
        São meio milhão em vales-compra de R$ 1.000,00 para você! Aniversário EPA 66 anos!
      </>
    ),
    () => (
      <>
        A cada R$ 100,00 em compras, você ganha 1 número da sorte! Participe!
      </>
    ),
  ];

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const endDate = new Date("2025-11-15");
      const diffTime = endDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    };
    calculateDays();
    const interval = setInterval(calculateDays, 86400000); // Update daily

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate messages every 7 seconds
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 7000); // 7000ms = 7 seconds

    return () => clearInterval(interval);
  }, [messages.length]);
  return (
    <div className="text-white py-3 px-4 text-center font-bold text-sm md:text-base bg-[#e30613] rounded-none flex items-center justify-center gap-2 flex-wrap animate-fade-in">
      <Clock className="w-5 h-5 flex-shrink-0" />
      <span key={currentMessageIndex} className="animate-fade-in">
        {messages[currentMessageIndex](daysLeft)}
      </span>
      <span className="text-[#f9e103]">Campanha válida de 13 de Outubro à 15 de Novembro de 2025</span>
    </div>
  );
};
export default CountdownBanner;