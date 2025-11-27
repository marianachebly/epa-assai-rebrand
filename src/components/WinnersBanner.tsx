import { Link } from "react-router-dom";

const WinnersBanner = () => {
  return (
    <Link to="/ganhadores" className="block">
      <div className="bg-yellow-400 py-6 overflow-hidden cursor-pointer hover:bg-yellow-500 transition-colors">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-3xl md:text-5xl font-black text-black mx-8">
            🎉 CONFIRA OS GANHADORES
          </span>
          <span className="text-3xl md:text-5xl font-black text-black mx-8">
            🎉 CONFIRA OS GANHADORES
          </span>
          <span className="text-3xl md:text-5xl font-black text-black mx-8">
            🎉 CONFIRA OS GANHADORES
          </span>
          <span className="text-3xl md:text-5xl font-black text-black mx-8">
            🎉 CONFIRA OS GANHADORES
          </span>
          <span className="text-3xl md:text-5xl font-black text-black mx-8">
            🎉 CONFIRA OS GANHADORES
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WinnersBanner;
