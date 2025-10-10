import { useEffect, useState } from "react";
const CountdownBanner = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const endDate = new Date("2025-12-31");
      const diffTime = endDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    };
    calculateDays();
    const interval = setInterval(calculateDays, 86400000); // Update daily

    return () => clearInterval(interval);
  }, []);
  return <div className="text-secondary-foreground py-3 px-4 text-center font-bold text-sm md:text-base bg-[#e30613] rounded-none">
      Você ainda tem <span className="text-lg md:text-xl">{daysLeft} DIAS</span> para participar
    </div>;
};
export default CountdownBanner;