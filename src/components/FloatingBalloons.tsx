const FloatingBalloons = () => {
  const balloons = [
    { id: 1, left: "8%", top: "20%", delay: "0s", duration: "6s", size: "80px", color: "🎈" },
    { id: 2, left: "22%", top: "60%", delay: "1s", duration: "7s", size: "70px", color: "🎈" },
    { id: 3, left: "40%", top: "8%", delay: "2s", duration: "8s", size: "90px", color: "🎈" },
    { id: 4, left: "60%", top: "70%", delay: "1.5s", duration: "6.5s", size: "75px", color: "🎈" },
    { id: 5, left: "78%", top: "25%", delay: "3s", duration: "7.5s", size: "85px", color: "🎈" },
    { id: 6, left: "88%", top: "55%", delay: "0.5s", duration: "7s", size: "65px", color: "🎈" },
    { id: 7, left: "15%", top: "40%", delay: "2.5s", duration: "7s", size: "70px", color: "🟡" },
    { id: 8, left: "50%", top: "65%", delay: "1s", duration: "6.5s", size: "80px", color: "🟡" },
    { id: 9, left: "70%", top: "15%", delay: "3.5s", duration: "8s", size: "75px", color: "🟡" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float-sway"
          style={{
            left: balloon.left,
            top: balloon.top,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
            fontSize: balloon.size,
          }}
        >
          {balloon.color}
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
