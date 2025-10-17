import { useEffect, useState, memo } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  color: string;
  shape: 'square' | 'circle' | 'triangle';
}

const Confetti = memo(() => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#e30613', '#ffffff', '#f9e103', '#ffd700', '#ff6b6b', '#4ecdc4'];
    const shapes: ('square' | 'circle' | 'triangle')[] = ['square', 'circle', 'triangle'];
    
    const pieces: ConfettiPiece[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }));

    setConfetti(pieces);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            top: '-10px'
          }}
        >
          {piece.shape === 'square' && (
            <div
              className="w-3 h-3 rotate-45"
              style={{
                backgroundColor: piece.color,
                animation: `confetti-spin ${piece.animationDuration}s linear infinite`
              }}
            />
          )}
          {piece.shape === 'circle' && (
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: piece.color,
                animation: `confetti-spin ${piece.animationDuration}s linear infinite`
              }}
            />
          )}
          {piece.shape === 'triangle' && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: `10px solid ${piece.color}`,
                animation: `confetti-spin ${piece.animationDuration}s linear infinite`
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
});

Confetti.displayName = "Confetti";

export default Confetti;
