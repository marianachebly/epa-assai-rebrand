import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CountdownBanner = () => {
  const [daysLeft, setDaysLeft] = useState(0);
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
  return <div className="text-white py-3 px-4 text-center font-bold text-sm md:text-base bg-[#e30613] rounded-none flex items-center justify-center gap-2 flex-wrap">
      <Clock className="w-5 h-5" />
      Você ainda tem <span className="text-lg md:text-xl">{daysLeft} DIAS</span> para participar.
      <span className="text-[#f9e103]">Campanha válida de 13 de Outubro à 15 de Novembro de 2025</span>
    </div>;
};
export default CountdownBanner;