import { memo } from "react";
const CountdownBanner = memo(() => {
  return <div className="text-white py-3 px-4 md:px-6 text-center font-bold text-sm md:text-base bg-[#e30613] rounded-none flex items-center justify-center gap-2">
      <span className="text-white">
        Inscrições encerradas!
      </span>
      <span className="text-[#f9e103]">Campanha válida de 13 de Outubro a 15 de Novembro de 2025. Resultado dia 27/11/2025.</span>
    </div>;
});
CountdownBanner.displayName = "CountdownBanner";
export default CountdownBanner;