import logoBy from "@/assets/logo-by.png";

const ByBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
      <span className="text-white text-xs font-light">by</span>
      <img src={logoBy} alt="Logo" className="h-4 w-auto" />
    </div>
  );
};

export default ByBadge;
